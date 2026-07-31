/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN CONFESS — SEMUA PENGATURAN DI SINI          ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "010826";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "SHANAY";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Nothing's Gonna Change My Love For You",             // ← GANTI JUDUL LAGU
    artist: "George Benson",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "ngl one smile from you and my whole day just gets so much better." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "you're literally the reason my heart feels this full, no cap." },
  { file: "img3.jpeg", caption: "every single sec with you is hands down my fave." },
  { file: "img4.jpeg", caption: "some people search their whole life for happiness, i just found it in you, fr." },
  { file: "img5.jpeg", caption: "you turned my whole ordinary life into something this beautiful, idk how." },
  { file: "img6.jpeg", caption: "my heart genuinely feels safest whenever it's with you." },
  { file: "img7.jpeg", caption: "if i could relive literally any moment, i'd pick us every single time." },
  { file: "img8.jpeg", caption: "still my favorite person, like, always and forever." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"I've been thinking about how to say this for a while, and honestly, no matter how many times I try to put it into words, I still feel like nothing would be enough to explain how I feel about you.",
"Somewhere along the way, you became someone I genuinely look forward to. Your messages, your little stories, the way you talk, the way you make me smile without even trying… somehow, all of those little things started meaning so much to me. And before I even realized it, you weren't just someone I enjoyed talking to anymore. You became someone I wanted to keep close.",
"I like what we have right now. I like the way we can talk about random things for hours, tease each other, be annoying together, and still somehow make each other's days a little better. But if I'm being completely honest, a part of me has been wanting more.",
"Not because what we have isn't enough, but because you are someone I want to choose intentionally.",
"I want to be the person who gets to hear about your day, even when it's something completely insignificant. I want to celebrate your little wins with you, listen when you've had a bad day, remind you to eat when you forget, tell you how pretty you are even when you don't believe me, and stay beside you through the good days and the messy ones.",
"I don't promise that I'll always know the perfect thing to say, and I definitely won't promise that I'll never be annoying :p But I can promise that I'll always try. I'll try to understand you, respect you, listen to you, and make sure you never have to question how much you mean to me.",
"And maybe I'm being a little brave by asking this, but I'd rather be honest about what my heart wants than keep wondering what could've happened if I had just asked.",
"So, Shanay… After all the conversations, all the teasing, all the little moments we've shared, and all the feelings I've slowly grown to have for you… Can I be your boyfriend?"

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "the first hello",
    text:  "I don't even remember the exact moment, but somewhere between random messages and late-night texts, you became someone whose reply I'd always look forward to.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "the little things",
    text:  "your stories, the way you talk, the way you make me smile without even trying — those little things slowly started meaning so much more than I expected.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "realizing it",
    text:  "somewhere along the way, you stopped being just someone I enjoyed talking to. you became someone I genuinely wanted to keep close.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "being brave enough to ask",
    text:  "and now, here I am — finally saying it out loud instead of just wondering what could've happened if I never asked.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "I want to be the person who hears about your day, even the parts that feel completely insignificant to anyone else." },
  { icon: "shell",   text: "I want to celebrate your little wins with you, and be there to listen when the day hasn't been kind." },
  { icon: "star",    text: "I want to remind you to eat when you forget, and tell you how pretty you are even when you don't believe me." },
  { icon: "compass", text: "I want to stay beside you through the good days and the messy ones, no matter which one shows up first." },
  { icon: "anchor",  text: "I can't promise I'll always know the perfect thing to say, or that I'll never be a little annoying — but I promise I'll always try." },
  { icon: "heart",   text: "so, Shanay... after all the conversations, all the teasing, and all the feelings I've slowly grown to have for you — can I be your boyfriend?" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6281250409974";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "hii I just read the whole thing 🤍 okay so... about your question—"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);