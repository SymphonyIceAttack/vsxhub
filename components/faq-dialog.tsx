"use client";

import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const faqs = [
  {
    question: "How do I install VSCode extensions?",
    answer:
      "Click the 'Install' button on any extension card, or search for the extension name in VSCode's Extensions panel (Ctrl+Shift+X on Windows/Linux, Cmd+Shift+X on Mac) and click the install button.",
  },
  {
    question: "Are all these extensions free?",
    answer:
      "Most VSCode extensions are completely free and open source. Some enterprise-focused extensions may have premium features or paid tiers, which will be clearly indicated in their marketplace page.",
  },
  {
    question: "How do I know which extensions are safe to install?",
    answer:
      "All extensions on the VSCode Marketplace are reviewed by Microsoft. Check the ratings, number of installs, and publisher reputation. Popular extensions with millions of installs and high ratings are generally safe and well-maintained.",
  },
  {
    question: "Can I use multiple extensions from the same category?",
    answer:
      "Yes! You can install as many extensions as you need. However, be mindful that too many extensions can slow down VSCode. It's best to enable only the extensions you actively use for your current projects.",
  },
  {
    question: "How do I update my extensions?",
    answer:
      "VSCode automatically checks for extension updates. You can manually update all extensions by opening the Extensions panel and clicking the 'Update All Extensions' button, or update individual extensions as needed.",
  },
  {
    question: "What if an extension doesn't work properly?",
    answer:
      "First, try reloading VSCode (Ctrl+R). If issues persist, check the extension's page for known issues or compatibility requirements. You can also disable the extension temporarily to see if it conflicts with others, or report issues to the extension's GitHub repository.",
  },
];

export function FaqDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 glass-effect border-2 hover:scale-105 transition-transform bg-transparent"
        >
          <HelpCircle className="h-4 w-4" />
          FAQ
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto glass-effect">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Frequently Asked Questions
          </DialogTitle>
          <DialogDescription>
            Everything you need to know about VSCode extensions
          </DialogDescription>
        </DialogHeader>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border/50"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DialogContent>
    </Dialog>
  );
}
