import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import type { Lead } from "@db/schema";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const { data: leads, isLoading, error } = useQuery<Lead[]>({
    queryKey: ["leads"],
    queryFn: async () => {
      const response = await fetch("/api/leads", {
        headers: {
          "Authorization": `Basic ${btoa(`:${password}`)}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch leads");
      return response.json();
    },
    enabled: isAuthenticated,
  });

  const sortedLeads = leads?.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Enter password to continue</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border bg-background"
            placeholder="Enter admin password"
          />
          <Button 
            onClick={() => setIsAuthenticated(true)}
            className="w-full bg-primary/90 hover:bg-primary"
          >
            Login
          </Button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-destructive">Error</h1>
          <p className="text-muted-foreground">Failed to load leads. Please try again.</p>
          <Button 
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
          >
            Back to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Contact Form Submissions</h1>
          <Button 
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
          >
            Logout
          </Button>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => setSortDirection(prev => prev === "asc" ? "desc" : "asc")}
                    className="flex items-center gap-2"
                  >
                    Date
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedLeads?.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>{lead.name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell className="max-w-md truncate">{lead.message}</TableCell>
                  <TableCell>
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
