-- CreateTable
CREATE TABLE "TodoList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "TodoListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "content" TEXT,
    "completed" BOOLEAN DEFAULT false,
    "todoListId" INTEGER,
    CONSTRAINT "TodoListItem_todoListId_fkey" FOREIGN KEY ("todoListId") REFERENCES "TodoList" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
