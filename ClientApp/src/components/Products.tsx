const bookInventroy: Product[] = [
    {
        OLID: "OL37828206M",
        name: "A Dog's Purpose",
        author: "W. Bruce Cameron",
        price: 42.99,
        description: "Surprised to find himself reborn as a rambunctious golden haired puppy after a tragically short life as a stray mutt, Bailey's search for his new life's meaning leads him into the loving arms of 8 year old Ethan. During their countless adventures Bailey joyously discovers how to be a good dog.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12726478-L.jpg'
    },
    {
        OLID: "OL25452011M",
        name: "Four: A Divergent Collection",
        author: "Veronica Roth",
        price: 22.99,
        description: "This collection of stories follows Four, also known as Tobias Eaton. If you enjoyed the Divergent series, you will love reading the story you know and love in Tobias' view.",
        imageUrl: 'https://covers.openlibrary.org/b/id/13278331-L.jpg'
    },
    {
        OLID: "OL28414930M",
        name: "Paper towns",
        author: "John Green",
        price: 34.25,
        description: "One month before graduating from his Central Florida high school, Quentin ¡®Q¡¯ Jacobsen basks in the predictable boringness of his life until the beautiful and exciting Margo Roth Spiegelman, Q's neighbor and classmate, takes him on a midnight adventure and then mysteriously disappears.",
        imageUrl: 'https://covers.openlibrary.org/b/id/10315202-L.jpg'
    },
    {
        OLID: "OL46418M",
        name: "The millennium",
        author: "Upton Sinclair",
        price: 32.58,
        description: "",
        imageUrl: 'https://covers.openlibrary.org/b/id/846707-L.jpg'
    },
    {
        OLID: "OL35675912M",
        name: "Harry Potter and the Deathly Hallows",
        author: "J. K. Rowling",
        price: 35.49,
        description: "Harry Potter is leaving Privet Drive for the last time. But as he climbs into the sidecar of Hagrid¡¯s motorbike and they take to the skies, he knows Lord Voldemort and the Death Eaters will not be far behind.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12376646-L.jpg'
    },
    {
        OLID: "OL25936998M",
        name: "Salt to the Sea",
        author: "Ruta Sepetys",
        price: 25.98,
        description: "Each one born of a different homeland; each one hunted, and haunted, by tragedy. lies and war.As thousands of desperate refugees flock to the coast in the midst of a Soviet advance, four paths converge. vying for passage aboard the Wilhelm Gustloff, a ship that promises safety and freedom.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12064044-L.jpg'
    },
    {
        OLID: "OL26387134M",
        name: "A Gentleman in Moscow",
        author: "Amor Towles",
        price: 27.58,
        description: "A Gentleman in Moscow is a 2016 novel by Amor Towles. It is his second novel, published five years after his New York Times best seller, Rules of Civility (2011).",
        imageUrl: 'https://covers.openlibrary.org/b/id/11445541-L.jpg'
    },
    {
        OLID: "OL26201129M",
        name: "Crooked Kingdom",
        author: "Leigh Bardugo",
        price: 20.99,
        description: "KAZ BREKKER and his crew, have just pulled off a heist so daring even they didn't think they'd survive. But instead of divvying up a fat reward, they're right back to fighting for their lives. Double-crossed and badly. weakened, the crew is low on resources, allies, and hope: As powerful forges from around the world descend on Ketterdam to root out the secrets of the dangerous drug known as jarda parem, old rivals and new enemies emerge to challenge Kaz's cunning and test the team's fragile loyalties. A war will be waged on the city's dark' arid twisting streets¡ªa battle for revenge and redemption that will decide the fate of the Grisha world.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12667428-L.jpg'
    },
    {
        OLID: "OL29412746M",
        name: "The Psychology of Money",
        author: "Morgan Housel",
        price: 18.58,
        description: "Timeless lessons on wealth, greed, and happiness doing well with money isn't necessarily about what you know. It¡¯s about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12824425-L.jpg'
    },
    {
        OLID: "OL27282505M",
        name: "William - the Outlaw",
        author: "Richmal Crompton, Francesca Simon, Thomas Henry, and Sara Ogilvie",
        price: 15.99,
        description: "This is the 7th installment in the 'Just William' series.The continuing tales of 11 year old mischief-maker William Brown.",
        imageUrl: 'https://covers.openlibrary.org/b/id/8763956-L.jpg'
    },
    {
        OLID: "OL38061727M",
        name: "It Ends with Us, It Starts with Us",
        author: "Colleen Hoover",
        price: 34.25,
        description: "From the #1 bestselling author of All Your Perfects, a workaholic with a too-good-to-be-true romance can't stop thinking about her first love.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12920899-L.jpg'
    },
    {
        OLID: "OL32532952M",
        name: "Better Than the Movies",
        author: "Lynn Painter",
        price: 22.99,
        description: "In this rom-com about rom-coms, in the spirit of Kasie West and Jenn Bennett, a hopeless romantic teen attempts to secure a happily-ever-after moment with her forever crush, but finds herself reluctantly drawn to the boy next door.",
        imageUrl: 'https://covers.openlibrary.org/b/id/11182600-L.jpg'
    },
    {
        OLID: "OL26992991M",
        name: "A Court of Mist and Fury",
        author: "Sarah J. Maas",
        price: 37.97,
        description: "Feyre has undergone more trials than one human woman can carry in her heart. Though she's now been granted the powers and lifespan of the High Fae, she is haunted by her time Under the Mountain and the terrible deeds she performed to save the lives of Tamlin and his people.",
        imageUrl: 'https://covers.openlibrary.org/b/id/13316297-L.jpg'
    },
    {
        OLID: "OL7826547M",
        name: "A Game of Thrones",
        author: "George R. R. Martin",
        price: 45.98,
        description: "Here is the first volume in George R. R. Martin¡¯s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords. As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer.",
        imageUrl: 'https://covers.openlibrary.org/b/id/11291394-L.jpg'
    },
    {
        OLID: "OL24896701M",
        name: "Thinking, fast and slow",
        author: "Daniel Kahneman",
        price: 25.98,
        description: "The phenomenal New York Times Bestseller by Nobel Prize-winner Daniel Kahneman, Thinking Fast and Slow offers a whole new look at the way our minds work, and how we make decisions. Why is there more chance we'll believe something if it's in a bold type face? Why are judges more likely to deny parole before lunch? Why do we assume a good-looking person will be more competent? The answer lies in the two ways we make choices- fast, intuitive thinking, and slow, rational thinking. This book reveals how our minds are tripped up by error and prejudice (even when we think we are being logical), and gives you practical techniques for slower, smarter thinking. It will enable to you make better decisions at work, at home, and in everything you do. %%%The New York Times Bestseller, acclaimed by author such as Freakonomics co-author Steven D. Levitt, Black Swan author Nassim Nicholas Taleb and Nudge co-author Richard Thaler, Thinking Fast and Slow offers a whole new look at the way our minds work, and how we make decisions. Why is there more chance we'll believe something if it's in a bold type face? Why are judges more likely to deny parole before lunch? Why do we assume a good-looking person will be more competent? The answer lies in the two ways we make choices- fast, intuitive thinking, and slow, rational thinking. This book reveals how our minds are tripped up by error and prejudice (even when we think we are being logical), and gives you practical techniques for slower, smarter thinking. It will enable to you make better decisions at work, at home, and in everything you do.",
        imageUrl: 'https://covers.openlibrary.org/b/id/7089298-L.jpg'
    },
    {
        OLID: "OL38010863M",
        name: "Twisted Lies",
        author: "Ana Huang",
        price: 27.58,
        description: "Charming, deadly, and smart enough to hide it, Christian Harper is a monster dressed in the perfectly tailored suits of a gentleman. He has little use for morals and even less use for love, but he can't deny the strange pull he feels toward the woman living just one floor below him.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12816871-L.jpg'
    },
    {
        OLID: "OL25418184M",
        name: "Men are from Mars, women are from Venus",
        author: "John Gray",
        price: 20.99,
        description: "",
        imageUrl: 'https://covers.openlibrary.org/b/id/9449958-L.jpg'
    },
    {
        OLID: "OL25439048M",
        name: "Ignite Me",
        author: "Tahereh Mafi",
        price: 15.99,
        description: "",
        imageUrl: 'https://covers.openlibrary.org/b/id/7272906-L.jpg'
    },
    {
        OLID: "OL26211555M",
        name: "The Magic Of Thinking Big",
        author: "David J. Schwartz",
        price: 24.99,
        description: "With more than six million copies sold worldwide, David Schwartz's timeless guide and best-selling phenomenon, The Magic of Thinking Big, is now available for the first time as an unabridged audio edition.Millions of people around the world have improved their lives through the timeless advice David Schwartz offers in The Magic of Thinking Big. In this best-selling audiobook, Schwartz proves you don't need innate talent to become successful, but you do need to understand the habit of thinking and behaving in ways that will get you there.Filled with easy-to-understand advice, this unabridged audio edition - perfect for gift giving - will put you on the road to changing the way you think, helping you work better, manage smarter, earn more money, achieve your goals, and, most importantly, live a fuller, happier life.",
        imageUrl: 'https://covers.openlibrary.org/b/id/7892538-L.jpg'
    },
    {
        OLID: "OL16600499M",
        name: "The house of the four winds",
        author: "John Buchan",
        price: 24.99,
        description: "A (mis)adventure, which combines an old Scotsman, a British MP and others in a youth-led royalist revolution in Mittle Europe. Complete with a circus elephant, this is a fun read, but definitely inferior to Buchan's more famous works.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12668077-L.jpg'
    },
]
const classicBooks: Product[] = [
    {
        OLID: "OL16600499M",
        name: "The house of the four winds",
        author: "John Buchan",
        price: 24.99,
        description: "A (mis)adventure, which combines an old Scotsman, a British MP and others in a youth-led royalist revolution in Mittle Europe. Complete with a circus elephant, this is a fun read, but definitely inferior to Buchan's more famous works.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12668077-L.jpg'
    },
    {
        OLID: "OL37828206M",
        name: "A Dog's Purpose",
        author: "W. Bruce Cameron",
        price: 42.99,
        description: "Surprised to find himself reborn as a rambunctious golden haired puppy after a tragically short life as a stray mutt, Bailey's search for his new life's meaning leads him into the loving arms of 8 year old Ethan. During their countless adventures Bailey joyously discovers how to be a good dog.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12726478-L.jpg'
    },
    {
        OLID: "OL35675912M",
        name: "Harry Potter and the Deathly Hallows",
        author: "J. K. Rowling",
        price: 35.49,
        description: "Harry Potter is leaving Privet Drive for the last time. But as he climbs into the sidecar of Hagrid¡¯s motorbike and they take to the skies, he knows Lord Voldemort and the Death Eaters will not be far behind.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12376646-L.jpg'
    },
    {
        OLID: "OL25936998M",
        name: "Salt to the Sea",
        author: "Ruta Sepetys",
        price: 25.98,
        description: "Each one born of a different homeland; each one hunted, and haunted, by tragedy. lies and war.As thousands of desperate refugees flock to the coast in the midst of a Soviet advance, four paths converge. vying for passage aboard the Wilhelm Gustloff, a ship that promises safety and freedom.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12064044-L.jpg'
    },
    {
        OLID: "OL26387134M",
        name: "A Gentleman in Moscow",
        author: "Amor Towles",
        price: 27.58,
        description: "A Gentleman in Moscow is a 2016 novel by Amor Towles. It is his second novel, published five years after his New York Times best seller, Rules of Civility (2011).",
        imageUrl: 'https://covers.openlibrary.org/b/id/11445541-L.jpg'
    },
    {
        OLID: "OL26201129M",
        name: "Crooked Kingdom",
        author: "Leigh Bardugo",
        price: 20.99,
        description: "KAZ BREKKER and his crew, have just pulled off a heist so daring even they didn't think they'd survive. But instead of divvying up a fat reward, they're right back to fighting for their lives. Double-crossed and badly. weakened, the crew is low on resources, allies, and hope: As powerful forges from around the world descend on Ketterdam to root out the secrets of the dangerous drug known as jarda parem, old rivals and new enemies emerge to challenge Kaz's cunning and test the team's fragile loyalties. A war will be waged on the city's dark' arid twisting streets¡ªa battle for revenge and redemption that will decide the fate of the Grisha world.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12667428-L.jpg'
    },
    {
        OLID: "OL46418M",
        name: "The millennium",
        author: "Upton Sinclair",
        price: 32.58,
        description: "",
        imageUrl: 'https://covers.openlibrary.org/b/id/846707-L.jpg'
    },
    {
        OLID: "OL27282505M",
        name: "William - the Outlaw",
        author: "Richmal Crompton, Francesca Simon, Thomas Henry, and Sara Ogilvie",
        price: 15.99,
        description: "This is the 7th installment in the 'Just William' series.The continuing tales of 11 year old mischief-maker William Brown.",
        imageUrl: 'https://covers.openlibrary.org/b/id/8763956-L.jpg'
    },
    {
        OLID: "OL28414930M",
        name: "Paper towns",
        author: "John Green",
        price: 34.25,
        description: "One month before graduating from his Central Florida high school, Quentin ¡®Q¡¯ Jacobsen basks in the predictable boringness of his life until the beautiful and exciting Margo Roth Spiegelman, Q's neighbor and classmate, takes him on a midnight adventure and then mysteriously disappears.",
        imageUrl: 'https://covers.openlibrary.org/b/id/10315202-L.jpg'
    },
    {
        OLID: "OL25452011M",
        name: "Four: A Divergent Collection",
        author: "Veronica Roth",
        price: 22.99,
        description: "This collection of stories follows Four, also known as Tobias Eaton. If you enjoyed the Divergent series, you will love reading the story you know and love in Tobias' view.",
        imageUrl: 'https://covers.openlibrary.org/b/id/13278331-L.jpg'
    },
];
const TrendingBooks: Product[] = [
    {
        OLID: "OL26992991M",
        name: "A Court of Mist and Fury",
        author: "Sarah J. Maas",
        price: 37.97,
        description: "Feyre has undergone more trials than one human woman can carry in her heart. Though she's now been granted the powers and lifespan of the High Fae, she is haunted by her time Under the Mountain and the terrible deeds she performed to save the lives of Tamlin and his people.",
        imageUrl: 'https://covers.openlibrary.org/b/id/13316297-L.jpg'
    },
    {
        OLID: "OL7826547M",
        name: "A Game of Thrones",
        author: "George R. R. Martin",
        price: 45.98,
        description: "Here is the first volume in George R. R. Martin¡¯s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords. As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer.",
        imageUrl: 'https://covers.openlibrary.org/b/id/11291394-L.jpg'
    },
    {
        OLID: "OL24896701M",
        name: "Thinking, fast and slow",
        author: "Daniel Kahneman",
        price: 25.98,
        description: "The phenomenal New York Times Bestseller by Nobel Prize-winner Daniel Kahneman, Thinking Fast and Slow offers a whole new look at the way our minds work, and how we make decisions. Why is there more chance we'll believe something if it's in a bold type face? Why are judges more likely to deny parole before lunch? Why do we assume a good-looking person will be more competent? The answer lies in the two ways we make choices- fast, intuitive thinking, and slow, rational thinking. This book reveals how our minds are tripped up by error and prejudice (even when we think we are being logical), and gives you practical techniques for slower, smarter thinking. It will enable to you make better decisions at work, at home, and in everything you do. %%%The New York Times Bestseller, acclaimed by author such as Freakonomics co-author Steven D. Levitt, Black Swan author Nassim Nicholas Taleb and Nudge co-author Richard Thaler, Thinking Fast and Slow offers a whole new look at the way our minds work, and how we make decisions. Why is there more chance we'll believe something if it's in a bold type face? Why are judges more likely to deny parole before lunch? Why do we assume a good-looking person will be more competent? The answer lies in the two ways we make choices- fast, intuitive thinking, and slow, rational thinking. This book reveals how our minds are tripped up by error and prejudice (even when we think we are being logical), and gives you practical techniques for slower, smarter thinking. It will enable to you make better decisions at work, at home, and in everything you do.",
        imageUrl: 'https://covers.openlibrary.org/b/id/7089298-L.jpg'
    },
    {
        OLID: "OL38010863M",
        name: "Twisted Lies",
        author: "Ana Huang",
        price: 27.58,
        description: "Charming, deadly, and smart enough to hide it, Christian Harper is a monster dressed in the perfectly tailored suits of a gentleman. He has little use for morals and even less use for love, but he can't deny the strange pull he feels toward the woman living just one floor below him.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12816871-L.jpg'
    },
    {
        OLID: "OL25418184M",
        name: "Men are from Mars, women are from Venus",
        author: "John Gray",
        price: 20.99,
        description: "",
        imageUrl: 'https://covers.openlibrary.org/b/id/9449958-L.jpg'
    },
    {
        OLID: "OL29412746M",
        name: "The Psychology of Money",
        author: "Morgan Housel",
        price: 18.58,
        description: "Timeless lessons on wealth, greed, and happiness doing well with money isn¡¯t necessarily about what you know. It¡¯s about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12824425-L.jpg'
    },
    {
        OLID: "OL25439048M",
        name: "Ignite Me",
        author: "Tahereh Mafi",
        price: 15.99,
        description: "",
        imageUrl: 'https://covers.openlibrary.org/b/id/7272906-L.jpg'
    },
    {
        OLID: "OL38061727M",
        name: "It Ends with Us, It Starts with Us",
        author: "Colleen Hoover",
        price: 34.25,
        description: "From the #1 bestselling author of All Your Perfects, a workaholic with a too-good-to-be-true romance can't stop thinking about her first love.",
        imageUrl: 'https://covers.openlibrary.org/b/id/12920899-L.jpg'
    },
    {
        OLID: "OL32532952M",
        name: "Better Than the Movies",
        author: "Lynn Painter",
        price: 22.99,
        description: "In this rom-com about rom-coms, in the spirit of Kasie West and Jenn Bennett, a hopeless romantic teen attempts to secure a happily-ever-after moment with her forever crush, but finds herself reluctantly drawn to the boy next door.",
        imageUrl: 'https://covers.openlibrary.org/b/id/11182600-L.jpg'
    },
    {
        OLID: "OL26211555M",
        name: "The Magic Of Thinking Big",
        author: "David J. Schwartz",
        price: 24.99,
        description: "With more than six million copies sold worldwide, David Schwartz's timeless guide and best-selling phenomenon, The Magic of Thinking Big, is now available for the first time as an unabridged audio edition.Millions of people around the world have improved their lives through the timeless advice David Schwartz offers in The Magic of Thinking Big. In this best-selling audiobook, Schwartz proves you don't need innate talent to become successful, but you do need to understand the habit of thinking and behaving in ways that will get you there.Filled with easy-to-understand advice, this unabridged audio edition - perfect for gift giving - will put you on the road to changing the way you think, helping you work better, manage smarter, earn more money, achieve your goals, and, most importantly, live a fuller, happier life.",
        imageUrl: 'https://covers.openlibrary.org/b/id/7892538-L.jpg'
    },
];

interface Product {
    OLID: string;
    name: string;
    author: string;
    description: string;
    price: number;
    imageUrl: string;
}

export { TrendingBooks, classicBooks, bookInventroy }; 