export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  img: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Keep Your Flowers Fresh for Longer',
    excerpt: 'Simple tips and tricks to extend the life of your beautiful bouquets at home.',
    content: `
      <p>Having a fresh bouquet of flowers in your home can instantly brighten up any room and lift your mood. However, without proper care, these beautiful arrangements can wilt all too quickly. Here are our top professional tips to keep your flowers looking fresh for as long as possible.</p>
      
      <h3>1. Start with a Clean Vase</h3>
      <p>Bacteria is the enemy of fresh flowers. Before you even think about adding water, make sure your vase is scrubbed clean with soap and water. This prevents premature wilting caused by microorganisms.</p>
      
      <h3>2. The Perfect Cut</h3>
      <p>When you get your flowers home, trim about an inch off the stems at a 45-degree angle. This increases the surface area for water absorption and prevents the stems from sitting flat against the bottom of the vase.</p>
      
      <h3>3. Remove Submerged Leaves</h3>
      <p>Any leaves that sit below the water line will rot, creating bacteria that kills your flowers. Strip them off to keep the water clear and healthy.</p>
      
      <h3>4. Change Water Daily</h3>
      <p>Don't just top it up—replace it. Fresh, cool water every day (or every other day) is the single best thing you can do for longevity.</p>
      
      <h3>5. Keep Them Cool</h3>
      <p>Avoid placing your bouquet in direct sunlight, near heaters, or on top of appliances that give off heat. A cool, draft-free spot is ideal.</p>
    `,
    date: 'March 15, 2024',
    img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800',
    author: 'Elena Rose'
  },
  {
    id: 2,
    title: 'The Meaning Behind Different Flower Colors',
    excerpt: 'Discover what each hue represents and how to choose the perfect message.',
    content: `
      <p>Flowers have been used to communicate emotions for centuries. The "language of flowers" or floriography was particularly popular in the Victorian era. Understanding what different colors represent can help you choose the perfect bouquet for your intended message.</p>
      
      <h3>Red: Passion and Love</h3>
      <p>The classic red rose is the universal symbol of romantic love and passion. But red tulips and carnations also carry themes of deep affection and desire.</p>
      
      <h3>Yellow: Friendship and Joy</h3>
      <p>Yellow flowers like sunflowers and daffodils radiate happiness. They are the perfect choice for celebrating a friendship or wishing someone a "get well soon."</p>
      
      <h3>Pink: Grace and Admiration</h3>
      <p>Lighter pinks represent grace and gentleness, while deeper pinks can signify gratitude and appreciation. They are versatile flowers for many occasions.</p>
      
      <h3>White: Purity and Sympathy</h3>
      <p>White lilies and roses are often associated with purity, innocence, and reverence. They are commonly used in weddings but also as a respectful gesture of sympathy.</p>
      
      <h3>Purple: Royalty and Success</h3>
      <p>Historically associated with royalty, purple flowers like irises and orchids represent dignity, pride, and success.</p>
    `,
    date: 'March 10, 2024',
    img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
    author: 'Julian Thorne'
  },
  {
    id: 3,
    title: 'Wedding Trends: 2024 Floral Inspirations',
    excerpt: 'From minimalist designs to lush garden styles, see what is trending this year.',
    content: `
      <p>Wedding florals are evolving in 2024, moving away from rigid structures toward more organic, expressive designs. If you're planning your big day, here are the trends we're seeing dominate the scene.</p>
      
      <h3>1. The "Quiet Luxury" Aesthetic</h3>
      <p>Minimalist but high-impact. Think monochromatic bouquets of lily of the valley or single-variety arrangements that feel sophisticated and timeless.</p>
      
      <h3>2. Meadow-Style Aisles</h3>
      <p>Instead of traditional pedestals, couples are opting for "grounded" floral arrangements that look like they're growing naturally from the floor, creating an immersive garden feel indoors.</p>
      
      <h3>3. Bold Color Pops</h3>
      <p>While pastels will always have a place, we're seeing a surge in vibrant, unexpected color combinations—like cobalt blue paired with soft peach or deep burgundy with bright lavender.</p>
      
      <h3>4. Sustainable Choices</h3>
      <p>More couples are asking for locally grown, seasonal blooms and foam-free installations to reduce the environmental impact of their wedding day.</p>
      
      <h3>5. Fruit and Flora</h3>
      <p>Incorporating citrus fruits, grapes, or even pomegranates into table arrangements adds a lush, Dutch-master-style texture that's both beautiful and unique.</p>
    `,
    date: 'March 05, 2024',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    author: 'Sophia Bloom'
  },
];
