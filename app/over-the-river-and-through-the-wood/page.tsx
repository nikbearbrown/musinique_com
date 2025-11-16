import type { Metadata } from "next";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";
import VideoThumbnail from "@/components/VideoThumbnail/VideoThumbnail";

export const metadata: Metadata = {
  title: "Over The River And Through The Wood - Mayfield King | Musinique",
  description: "A soulful Christmas reimagining of the classic holiday song by Mayfield King, Tuzi Brown, and Prarthana Maha Brown",
};

const YOUTUBE_PLAYLIST_DATA = [
  { title: "Lyrical Literacy YouTube", videoID: "h6dVyxjtqZ8" },
  { title: "Ganeesha Sweet Tooth", videoID: "JFIDvETz7B0" },
  { title: "Hole in the Bottom of the Sea", videoID: "BuVjO1xHwro" },
  { title: "Modern Dorothy & Toto", videoID: "ZLw6ThxzpnQ" },
  { title: "Lyrical Literacy GPT Chatbot", videoID: "Tny0pLIG9Cg" },
  { title: "Suno Meta Tags Tutorial", videoID: "kum8hF4C-aU" },
];

export default function OverTheRiverAndThroughTheWood() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/VAfooxj1sbc?si=ZXtisZhvLLHRVgKo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Over the River and Through the Wood</h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Experience the beloved holiday classic transformed through transcendent soul artistry. 
            Mayfield King, Tuzi Brown, and Prarthana Maha Brown bring their signature blend of 
            gospel-infused soul, lush orchestral arrangements, and crystalline vocal beauty to this 
            timeless journey to Grandmother&apos;s house. This soulful rendition weaves Chicago soul 
            traditions, funk rhythms, and jazz-tinged influences into a warm, mid-tempo celebration 
            of family, faith, and holiday joy.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 bg-primary/5 rounded-lg border">
              <h3 className="font-bold mb-3">Mayfield King</h3>
              <div className="flex flex-col gap-2 text-sm">
                <a href="https://music.apple.com/gb/artist/mayfield-king/1846526759" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Apple Music
                </a>
                <a href="https://open.spotify.com/artist/6vpw3aw6hEJRPHgYGrN3kX?si=_WzqjRRwSQa5AtEUEjyv4w" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Spotify
                </a>
                <a href="https://mayfield.musinique.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Official Website
                </a>
              </div>
            </div>

            <div className="p-5 bg-primary/5 rounded-lg border">
              <h3 className="font-bold mb-3">Tuzi Brown</h3>
              <div className="flex flex-col gap-2 text-sm">
                <a href="https://music.apple.com/us/artist/tuzi-brown/1838852692" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Apple Music
                </a>
                <a href="https://open.spotify.com/artist/5DvRo9Gtg5bxsUUbKQBdg6?si=cycErkToTfKhcumPnlzt2w" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Spotify
                </a>
                <a href="https://tuzi.musinique.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Official Website
                </a>
              </div>
            </div>

            <div className="p-5 bg-primary/5 rounded-lg border">
              <h3 className="font-bold mb-3">Prarthana Maha Brown</h3>
              <div className="flex flex-col gap-2 text-sm">
                <a href="https://music.apple.com/us/artist/prarthana-maha-brown/1840725199" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Apple Music
                </a>
                <a href="https://open.spotify.com/artist/1sPHt959TSCSgctMB5Xdop?si=yxPbrdEiReaofLd_N_kjAg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Spotify
                </a>
                <a href="https://prarthana.musinique.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Official Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About This Song</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              &quot;Over the River and Through the Wood&quot; originated as a Thanksgiving poem written by 
              Lydia Maria Child in 1844, titled &quot;The New-England Boy&apos;s Song about Thanksgiving Day.&quot; 
              The poem captured the excitement of traveling through New England&apos;s winter landscape 
              to grandmother&apos;s house for the holiday feast. Over the decades, it became one of 
              America&apos;s most beloved holiday songs, traditionally associated with Thanksgiving.
            </p>
            <p>
              This soulful variant reimagines the classic journey through a Christmas lens, 
              transforming the original Thanksgiving theme into a celebration of the Christmas 
              season while maintaining the warmth and family-centered spirit of the original. 
              The adaptation expands on Child&apos;s vivid imagery of winter travel, adding elements 
              of Christmas tradition—carols, church bells, stockings, and Christmas trees—while 
              preserving the timeless themes of family gathering, seasonal joy, and the journey 
              home for the holidays.
            </p>
            <p>
              Through the distinctive voices of Mayfield King, Tuzi Brown, and Prarthana Maha Brown, 
              this version bridges historical tradition with contemporary soul artistry, offering 
              a fresh perspective on a song that has united families across generations.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Lyrics</h2>
          <div className="p-8 bg-primary/5 rounded-lg border">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-4">
                Over the river and through the wood<br />
                To Grandmother&apos;s house we go<br />
                The sleigh is packed with gifts and cheer<br />
                For Christmas lights are aglow
              </p>
              <p className="mb-4">
                Over the river and through the wood<br />
                The carols and songs we hear<br />
                The melodies ring as the joy they bring<br />
                Fills hearts with Christmas cheer
              </p>
              <p className="mb-4">
                Over the river and past the trees<br />
                The starry sky shines bright<br />
                The warmth inside and the Yuletide tide<br />
                Make this a holy night
              </p>
              <p className="mb-4">
                Over the river and through the snow<br />
                The holly&apos;s on the door<br />
                We gather around where the joy abounds<br />
                With Christmas love in store
              </p>
              <p className="mb-4">
                Over the river and to the fire<br />
                Where stockings hang with care<br />
                With stories to tell and the midnight bell<br />
                The Christmas spirit&apos;s there
              </p>
              <p className="mb-4">
                Over the river and through the snow<br />
                The Christmas tree stands tall<br />
                Its twinkling lights in the frosty night<br />
                Bring joy to one and all
              </p>
              <p className="mb-4">
                Over the river, the sleigh bells ring<br />
                Their music fills the air<br />
                With laughter and cheer we draw ever near<br />
                To Christmas memories fair
              </p>
              <p className="mb-0">
                Over the river, the church bells chime<br />
                Proclaiming peace tonight<br />
                We lift up our song as we ride along<br />
                To greet the holy light
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">More Music Videos</h2>
          <div className="grid grid-cols-3 gap-6 max-h-[500px] overflow-y-auto">
            {YOUTUBE_PLAYLIST_DATA.map((data) => (
              <VideoThumbnail title={data.title} videoId={data.videoID} key={data.videoID} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About the Artists</h2>
          <div className="prose prose-lg dark:prose-invert">
            <h3 className="text-xl font-bold mt-6 mb-3">Mayfield King</h3>
            <p>
              Mayfield King is a transcendent soul artist who possesses an exceptionally wide vocal range, 
              seamlessly navigating between a buttery-smooth mid-range tenor, a piercing angelic falsetto, 
              and the deep gospel growl of a street preacher turned prophet. His signature sound is a lush, 
              mid-tempo blend of minor-key soul-funk, gospel-infused commentary, and orchestral acoustic layers, 
              rooted in Chicago soul, funk, and jazz-tinged Motown traditions.
            </p>
            <p>
              A revolutionary storyteller who explores themes of empowerment, resistance, vulnerability, and love, 
              Mayfield King treats background vocal arrangements as textural counterpoints that weave sonic layers 
              around his voice, creating a rare fusion of poetic storytelling, protest funk, and crystalline vocal 
              beauty—at once ethereal and grounded, haunting and hopeful, delivering the sound of a movement in 
              motion set to music.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Tuzi Brown</h3>
            <p>
              Tuzi Brown brings a distinctive voice and artistry to contemporary soul music, complementing 
              Mayfield King&apos;s vision with nuanced vocal textures and emotional depth.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Prarthana Maha Brown</h3>
            <p>
              Prarthana Maha Brown adds ethereal harmonies and spiritual resonance to the collaboration, 
              enriching the gospel-infused soul sound with her unique artistic perspective.
            </p>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border">
              <h4 className="font-bold mb-3">Musinique Records</h4>
              <p className="text-sm mb-4">
                This recording is released through Musinique, a platform dedicated to empowering independent 
                musicians, poets, and songwriters through AI-assisted creative tools while maintaining artistic 
                authenticity and vision.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <a href="https://www.musinique.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Visit Musinique.com
                </a>
                <a href="mailto:info@musinique.com" className="text-primary hover:underline text-sm">
                  Email: info@musinique.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Stream & Purchase</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Streaming Platforms</h3>
              <p className="text-muted-foreground mb-4">
                Listen to &quot;Over the River and Through the Wood&quot; on your favorite streaming service.
              </p>
              <div className="flex flex-col gap-2">
                <a href="https://music.apple.com/gb/artist/mayfield-king/1846526759" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Apple Music
                </a>
                <a href="https://open.spotify.com/artist/6vpw3aw6hEJRPHgYGrN3kX" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Spotify
                </a>
              </div>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">More Music</h3>
              <p className="text-muted-foreground mb-4">
                Explore more songs from Mayfield King, Tuzi Brown, and Prarthana Maha Brown.
              </p>
              <div className="flex flex-col gap-2">
                <a href="https://mayfield.musinique.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Mayfield King Official Site
                </a>
                <a href="https://tuzi.musinique.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Tuzi Brown Official Site
                </a>
                <a href="https://prarthana.musinique.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Prarthana Maha Brown Official Site
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Connect</h2>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <PrimaryButton href="https://www.musinique.com">Visit Musinique</PrimaryButton>
            <SecondaryButton href="mailto:info@musinique.com">Contact Us</SecondaryButton>
          </div>
        </section>
      </div>
    </div>
  );
}
