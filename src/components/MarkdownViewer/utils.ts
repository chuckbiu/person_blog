export const extractHeadings = (markdown: string) => {
    return markdown
      .split("\n")
      .map((line) => {
        const match = line.match(/^(#{1,6})\s+(.*)/);
        if (match) {
          const level = match[1].length;
          const text = match[2];
          const id = text.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-一-龥]/g, "");
          return { level, text, id };
        }
        return null;
      })
      .filter(Boolean) as { level: number; text: string; id: string }[];
  };
  
  export const preprocessMarkdown = (markdown: string) => {
    return markdown
      .split("\n")
      .map((line) => {
        const match = line.match(/^(#{1,6})\s+(.*)$/);
        if (match) {
          const text = match[2];
          const id = text.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-一-龥]/g, "");
          return `${match[1]} ${text} {#${id}}`;
        }
        return line;
      })
      .join("\n");
  };
  