Got it 😄 — here’s a **clean, minimal `README.md`** that focuses **only on how to install, build, run, and test** your MCP server.
It’s short, practical, and perfect to include in your GitHub repo 👇

---

````markdown
# Ressl AI Assignment – Task 2: MCP Server (Node.js)

This project implements a **Model Context Protocol (MCP) server** using Node.js and the official `@modelcontextprotocol/sdk`.  
The server provides a single tool named **`search_keyword`** that searches for a given keyword inside a text file.

---

## 🛠️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/ressl-mcp-server.git
cd ressl-mcp-server
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Build the Project

```bash
npm run build
```

### 4️⃣ Run the MCP Server

```bash
npm run start
```

You should see this in your terminal:

```
Keyword Search MCP Server running on stdio
```

---

## 🧪 Test Using MCP Inspector

### Step 1 – Install Inspector

```bash
npm install -g @modelcontextprotocol/inspector
```

### Step 2 – Launch Inspector with the Server

```bash
npx @modelcontextprotocol/inspector ./build/index.js
```

This will open **MCP Inspector** in your browser (usually at `http://localhost:5173`).

### Step 3 – Provide Sample Input

* **filePath:** Full path to your sample file (e.g., `C:\\Users\\Aditya\\Downloads\\Ressl\\sample.txt`)
* **keyword:** The word you want to search (e.g., `keyword`)

Click **Run Tool** and view the results in the output panel.

📸 Take a screenshot of this Inspector view showing both **input and output**, and attach it in your submission document.

---

## 🧾 Example Output

```
Found 2 occurrences of "keyword":
Line 9: This line contains the word keyword for testing keyword search.
Line 10: Let's add another keyword here to verify multiple matches.
```

---

## 🔗 Repository Link

GitHub: [https://github.com/<your-username>/ressl-mcp-server]([https://github.com/<your-username>/ressl-mcp-server](https://github.com/adi673/ressl-mcp-server-assignment))

```

---

✅ **Usage:**  
Copy the above content into a file named **`README.md`** and replace `<your-username>` with your GitHub username.  

This will make your repo look clean and professional — focused purely on **how to build, run, and test** your MCP server.
```
