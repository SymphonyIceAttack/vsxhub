"use client";

import { Download, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Extension {
  id: string;
  name: string;
  publisher: string;
  description: string;
  category: string;
  rating: string;
  installs: string;
  icon: string;
  extensionName: string;
}

export function ExtensionCard({ extension }: { extension: Extension }) {
  const handleInstall = () => {
    window.open(`vscode:extension/${extension.extensionName}`, "_blank");
  };

  return (
    <Card className="group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 glass-effect border-2 hover:border-primary flex flex-col h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden flex-shrink-0 border-2 border-primary/30">
              <img
                src={extension.icon || "/placeholder.svg"}
                alt={`${extension.name} icon`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.textContent) {
                    parent.classList.add(
                      "text-xl",
                      "font-bold",
                      "bg-gradient-to-br",
                      "from-primary",
                      "to-accent",
                      "bg-clip-text",
                      "text-transparent",
                    );
                    parent.textContent = extension.name.charAt(0).toUpperCase();
                  }
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg text-balance group-hover:text-primary transition-colors">
                {extension.name}
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">
                {extension.publisher}
              </p>
              <Badge
                variant="secondary"
                className="mt-2 text-xs bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30"
              >
                {extension.category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 flex flex-col flex-1">
        <CardDescription className="text-sm leading-relaxed text-pretty line-clamp-3">
          {extension.description}
        </CardDescription>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold text-foreground">
              {extension.rating}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Download className="h-4 w-4 text-primary" />
            <span className="font-semibold text-foreground">
              {extension.installs}
            </span>
          </div>
        </div>

        <Button
          className="w-full mt-auto bg-gradient-to-r from-primary via-secondary to-accent hover:scale-105 transition-transform shadow-lg font-semibold"
          size="sm"
          onClick={handleInstall}
        >
          Install Extension
        </Button>
      </CardContent>
    </Card>
  );
}
