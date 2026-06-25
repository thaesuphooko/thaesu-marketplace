import { execSync } from 'child_process';

export const db = {
  select: () => ({
    from: (table) => ({
      all: () => {
        // sqlite3 command ကိုသုံးပြီး data ဆွဲထုတ်မယ်
        const result = execSync("sqlite3 sqlite.db 'SELECT * FROM products;'").toString();
        const lines = result.trim().split('\n');
        return lines.map(line => {
          const [id, title, price, image] = line.split('|');
          return { id, title, price, image };
        });
      }
    })
  })
};
