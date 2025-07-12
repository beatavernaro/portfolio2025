import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  // Static texts
  texts = {
    sectionTitle: "Let's Talk?",
    sectionSubtitle: "Get in touch to discuss your next project",
    email: "Email",
    emailValue: "contact@beatriz.dev",
    sendEmail: "Send email",
    linkedin: "LinkedIn", 
    linkedinDescription: "Let's connect",
    viewProfile: "View profile",
    github: "GitHub",
    githubDescription: "Check out my projects", 
    viewRepositories: "View repositories",
    location: "Location",
    locationValue: "São Paulo, SP - Brazil",
    remoteAvailable: "Available for remote work",
    followMe: "Follow me on social media",
    contactForm: {
      title: "Send me a message",
      name: "Name",
      namePlaceholder: "Your name",
      nameRequired: "Name is required",
      nameMinLength: "Name must be at least 2 characters",
      email: "Email",
      emailPlaceholder: "your@email.com",
      emailRequired: "Email is required", 
      emailInvalid: "Please enter a valid email",
      subject: "Subject",
      subjectPlaceholder: "What is this about?",
      subjectRequired: "Subject is required",
      subjectMinLength: "Subject must be at least 5 characters",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      messageRequired: "Message is required",
      messageMinLength: "Message must be at least 10 characters",
      sending: "Sending...",
      send: "Send Message",
      successMessage: "Message sent successfully! I'll get back to you soon."
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
