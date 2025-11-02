import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs/promises";
// Create server instance
const server = new McpServer({
    name: "keyword-search-server",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
// Define tool: search_keyword
server.tool("search_keyword", "Search for a keyword inside a given text file", {
    filePath: z.string().describe("Path to the text file to search"),
    keyword: z.string().describe("Keyword to search within the file"),
}, async ({ filePath, keyword }) => {
    try {
        const content = await fs.readFile(filePath, "utf-8");
        const lines = content.split("\n");
        const results = lines
            .map((line, index) => line.includes(keyword)
            ? `Line ${index + 1}: ${line.trim()}`
            : null)
            .filter(Boolean);
        if (results.length === 0) {
            return {
                content: [{ type: "text", text: `No matches found for "${keyword}".` }],
            };
        }
        return {
            content: [
                {
                    type: "text",
                    text: `Found ${results.length} occurrences of "${keyword}":\n\n${results.join("\n")}`,
                },
            ],
        };
    }
    catch (error) {
        return {
            content: [
                { type: "text", text: `Error reading file: ${error.message}` },
            ],
        };
    }
});
// Run the server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Keyword Search MCP Server running on stdio");
}
main().catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
});
