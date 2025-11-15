import type { Metadata } from "next";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";

export const metadata: Metadata = {
  title: "Aengus – Dance Video Prompt GPT",
  description:
    "Aengus is a custom GPT that turns your song lyrics and images into cinematic text-to-video dance prompts, with a special Xmas mode for Christmas carols.",
};

const AENGUS_GPT_URL =
  "https://chatgpt.com/g/g-6918a0a26bfc81919f92e07ae0032848";

export default function Aengus() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* ===== HERO SECTION ===== */}
        <div className="mb-16">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium mb-4">
            Musinique Custom GPT · Text-to-Video Dance Prompts
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aengus: Dream-Choreographer GPT
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            Aengus turns your{" "}
            <span className="font-semibold">lyrics + images</span> into{" "}
            <span className="font-semibold">
              production-ready, text-to-video dance prompts
            </span>{" "}
            for tools like Sora, Veo, Runway, and Pika. It keeps choreography,
            camera work, and mood consistent across a song—and includes a
            dedicated <span className="font-semibold">Xmas mode</span> for
            classic Christmas carols.
          </p>

          {/* Primary call to action */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <PrimaryButton href={AENGUS_GPT_URL}>
              Open the Aengus GPT
            </PrimaryButton>
            <SecondaryButton href="#how-it-works">
              How Aengus Works
            </SecondaryButton>
          </div>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-black/80 mb-2">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/GN7yQntWJHU?si=gTXWalKvsLDP8nbV"
              title="Aengus demo video (placeholder)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Demo / walkthrough placeholder – you can replace this video with an
            updated overview later.
          </p>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="grid gap-12">
          {/* ===== WHAT AENGUS DOES ===== */}
          <section id="what-it-does">
            <h2 className="text-3xl font-bold mb-6">What Aengus Does</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Aengus is a custom GPT designed to behave like a
                dream-choreographer. You feed it song lyrics and one or more
                images; it returns rich, cinematic prompts that describe dance
                movement, camera language, and looping behavior tailored for
                text-to-video models.
              </p>

              <p>Under the hood, Aengus:</p>

              <ul>
                <li>
                  Treats each session as a <strong>&quot;song&quot;</strong> with
                  a consistent dance style, mood, and visual continuity.
                </li>
                <li>
                  Reads the <strong>lyrics</strong> to infer tempo, energy, and
                  emotional arcs.
                </li>
                <li>
                  Reads the <strong>image</strong> to preserve character look,
                  clothing, environment, lighting, and framing.
                </li>
                <li>
                  Outputs detailed choreography: footwork, weight shifts,
                  gestures, dynamics, and timing for 4–8 second seamless loops.
                </li>
                <li>
                  Describes <strong>camera behavior</strong> (shot size, angle,
                  motion) suitable for stable text-to-video generation.
                </li>
              </ul>

              <p>
                Once a song is established, every new image you upload becomes a
                new shot in the same visual world—same dance style, same mood,
                and the same narrative through-line.
              </p>
            </div>
          </section>

          {/* ===== HOW TO USE IT ===== */}
          <section id="how-it-works">
            <h2 className="text-3xl font-bold mb-6">How to Use the Aengus GPT</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>Open the GPT:</strong> Click{" "}
                  <a
                    href={AENGUS_GPT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    Open Aengus in ChatGPT
                  </a>{" "}
                  and start a new chat.
                </li>
                <li>
                  <strong>Start a general song session (muzak):</strong>
                  <ul>
                    <li>Paste your song lyrics.</li>
                    <li>Upload one or more reference images.</li>
                    <li>Type <code>muzak</code> to generate prompts.</li>
                    <li>
                      Any later images you upload will reuse the same lyrics and
                      dance style.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Use Xmas mode for Christmas carols:</strong>
                  <ul>
                    <li>Upload a Christmas-themed image (nativity, snow, bells, etc.).</li>
                    <li>Type <code>Xmas</code>.</li>
                    <li>
                      Aengus picks a public-domain carol or your supplied
                      Christmas lyrics and builds holiday-styled choreography.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Refine the session:</strong>
                  <ul>
                    <li>
                      <code>lyrics: [text]</code> – change lyrics while keeping
                      style.
                    </li>
                    <li>
                      <code>style: [dance style]</code> – lock a specific style
                      (e.g., &quot;lyrical contemporary,&quot; &quot;urban
                      popping,&quot; &quot;folk circle dance&quot;).
                    </li>
                    <li>
                      <code>remix</code> – ask for a new interpretation of the
                      last shot with the same world and style.
                    </li>
                    <li>
                      <code>new song</code> – clear everything and start over.
                    </li>
                  </ul>
                </li>
              </ol>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">General Mode · muzak</h3>
                  <p className="text-muted-foreground">
                    For any genre or mood. Paste lyrics, upload a reference
                    image, type <code>muzak</code>, and Aengus infers a fitting
                    dance style and camera language for your video model.
                  </p>
                </div>
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Christmas Mode · Xmas</h3>
                  <p className="text-muted-foreground">
                    For public-domain carols and holiday songs. Type{" "}
                    <code>Xmas</code> and Aengus uses its Christmas catalog to
                    create cozy, cinematic holiday dance prompts.
                  </p>
                </div>
              </div>

              <p className="font-medium">
                Ready to try it?{" "}
                <a
                  href={AENGUS_GPT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Open the Aengus GPT now
                </a>{" "}
                and drop in your first song.
              </p>
            </div>
          </section>

          {/* ===== RESOURCES SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Links & Resources</h2>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <PrimaryButton href={AENGUS_GPT_URL}>
                Open Aengus in ChatGPT
              </PrimaryButton>
              <SecondaryButton href="https://github.com/Humanitariansai/">
                Humanitarians AI GitHub
              </SecondaryButton>
              <SecondaryButton href="https://www.youtube.com/@humanitariansai">
                Humanitarians AI YouTube
              </SecondaryButton>
              <SecondaryButton href="https://www.humanitarians.ai/">
                Humanitarians AI Website
              </SecondaryButton>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Connect with Humanitarians AI
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/company/105696953/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/@humanitariansai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  YouTube
                </a>
                <a
                  href="https://www.humanitarians.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Humanitariansai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://music.apple.com/us/artist/humanitarians-ai/1781414009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Apple Music
                </a>
                <a
                  href="https://open.spotify.com/artist/3cj3R4pDpYQHaWx0MM2vFV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Spotify
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
