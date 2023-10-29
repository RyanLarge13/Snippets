-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_snippetId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_snippetId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_snippetId_fkey";

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
