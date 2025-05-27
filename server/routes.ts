import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Rate limiting for contact form submissions
const contactRateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 30 * 1000; // 30 seconds in milliseconds

// Email configuration for Hostinger
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // SSL/TLS
  auth: {
    user: 'sales@hackure.in',
    pass: 'H@ckure#1529'
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Get client IP address
      const clientIP = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || 'unknown';
      
      // Check rate limit
      const now = Date.now();
      const lastSubmission = contactRateLimit.get(clientIP);
      
      if (lastSubmission && (now - lastSubmission) < RATE_LIMIT_WINDOW) {
        const remainingTime = Math.ceil((RATE_LIMIT_WINDOW - (now - lastSubmission)) / 1000);
        return res.status(429).json({
          message: `Rate limit exceeded. Please wait ${remainingTime} seconds before submitting again.`,
          error: "RATE_LIMIT_EXCEEDED",
          retryAfter: remainingTime
        });
      }
      
      // Update rate limit timestamp
      contactRateLimit.set(clientIP, now);
      
      // Clean up old entries (older than rate limit window)
      for (const [ip, timestamp] of contactRateLimit.entries()) {
        if (now - timestamp >= RATE_LIMIT_WINDOW) {
          contactRateLimit.delete(ip);
        }
      }

      const contactData = insertContactSchema.parse(req.body);

      // Send email notification
      try {
        await transporter.sendMail({
          from: 'sales@hackure.in',
          to: 'maliaakash09@gmail.com',
          subject: `New Contact Form Submission from ${contactData.firstName} ${contactData.lastName}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #555; }
                .value { margin-top: 5px; }
                .services-list { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; }
                .service-item { padding: 5px 0; border-bottom: 1px solid #eee; }
                .service-item:last-child { border-bottom: none; }
                .message-box { background: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd; white-space: pre-wrap; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 style="margin: 0;">🔒 New Contact Form Submission</h2>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Hackure Cybersecurity</p>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">👤 Full Name:</div>
                    <div class="value">${contactData.firstName} ${contactData.lastName}</div>
                  </div>

                  <div class="field">
                    <div class="label">📧 Email Address:</div>
                    <div class="value"><a href="mailto:${contactData.email}">${contactData.email}</a></div>
                  </div>

                  <div class="field">
                    <div class="label">🏢 Company:</div>
                    <div class="value">${contactData.company || 'Not provided'}</div>
                  </div>

                  <div class="field">
                    <div class="label">🛡️ Services Interested In:</div>
                    <div class="services-list">
                      ${contactData.services && contactData.services.length > 0 
                        ? contactData.services.map(service => `
                        <div class="service-item">• ${service}</div>
                      `).join('')
                        : '<div class="service-item">No services selected</div>'
                      }
                    </div>
                    <p style="margin: 10px 0 0 0; font-size: 12px; color: #666;">
                      Total: ${contactData.services ? contactData.services.length : 0} service${contactData.services && contactData.services.length > 1 ? 's' : ''} selected
                    </p>
                  </div>

                  <div class="field">
                    <div class="label">💬 Message:</div>
                    <div class="message-box">${contactData.message}</div>
                  </div>

                  <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 5px; border-left: 4px solid #2196F3;">
                    <p style="margin: 0; font-size: 14px; color: #1565C0;">
                      <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                        timeZone: 'Asia/Kolkata',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                      })} IST
                    </p>
                  </div>
                </div>
              </div>
            </body>
            </html>
          `
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Continue even if email fails
      }

      res.json({
        success: true,
        message: "Contact form submitted successfully"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          message: "Invalid contact data",
          errors: error.errors,
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          message: "Failed to submit contact form",
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({
        message: "Failed to retrieve contacts",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}