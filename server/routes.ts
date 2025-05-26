import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

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
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);

      // Send email notification
      try {
        await transporter.sendMail({
          from: 'sales@hackure.in',
          to: 'maliaakash09@gmail.com',
          subject: `New Contact Form Submission from ${contactData.firstName} ${contactData.lastName}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Company:</strong> ${contactData.company || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p>${contactData.message}</p>
          `
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Continue even if email fails
      }

      res.json({
        success: true,
        message: "Contact form submitted successfully",
        contactId: contact.id,
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