import type { Metadata } from "next"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "LLM Dance Off – Video Model Dance Benchmark",
  description:
    "Side-by-side dance benchmarks for leading video generation models using identical prompts and reference images.",
}

export default function LLMDance() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            LLM Dance Off
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            LLM Dance Off is a small benchmark project that tests how well
            different video-generation models handle{" "}
            <span className="font-semibold">dance</span>. Each model gets the
            same reference image and the same natural-language prompt. The goal:
            see which models can keep rhythm, footwork, and character integrity
            without falling apart.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            {/* You will replace this with a stitched overview video later */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/GN7yQntWJHU?si=gTXWalKvsLDP8nbV"
              title="LLM Dance Off Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-12">
          {/* About Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Experiment Design</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                This page documents a set of carefully written prompts used to
                generate <strong>dance videos</strong> from still reference
                images. Each prompt is run across the same pool of “best /
                most-capable” video models so viewers can directly compare:
              </p>

              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>How well the model preserves the character and scene</li>
                <li>How smooth and rhythmic the dance motion looks</li>
                <li>Whether footwork, loops, and timing stay coherent</li>
              </ul>

              <p className="mt-4">
                You can swap in your own reference videos later – the important
                part here is that <strong>the text prompts stay identical</strong>{" "}
                across models so you get a fair side-by-side comparison.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Model Lineup – Best / Most Capable (Dance Focus)
              </h3>

              <p>
                These are the models used in the LLM Dance Off comparison. Each
                one is asked to generate a short loop (about 4–6 seconds) for
                every prompt below.
              </p>

              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Veo 3 Fast</li>
                <li>Veo 3</li>
                <li>Seedance V1.0</li>
                <li>Runway Gen-4 (Image → Video mode)</li>
                <li>Runway Gen-4 Turbo</li>
                <li>LTX 2 Video Fast</li>
                <li>LTX 2 Video Pro</li>
                <li>Kling 2.1 Standard</li>
                <li>Wan Vace</li>
                <li>Runway Act-Two</li>
                <li>Minimax Hailuo 02</li>
                <li>
                  <strong>Higgsfield (video)</strong>
                </li>
              </ul>

              <p className="mt-4">
                For each of these models (plus Higgsfield), we generate one
                video per prompt and arrange them in a grid so viewers can watch
                the “dance off” model by model.
              </p>
            </div>
          </section>

          {/* Prompt Library */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Prompt Library</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                Below are <strong>all of the dance prompts</strong> used in this
                session. Each prompt assumes a specific reference image (three
                soldiers, single soldier, frog mascot, etc.). When you wire this
                page up, you can place the corresponding model outputs (Veo,
                Runway, Higgsfield, etc.) directly under each prompt.
              </p>

              {/* 1. Three Soldiers – Crip Walk */}
              <h3 className="text-xl font-bold mt-6 mb-2">
                1. Three Soldiers – Crip-Walk Footwork
              </h3>
              <p className="text-sm text-muted-foreground">
                Reference: three fully uniformed soldiers standing in formation
                at a protest (wide shot).
              </p>
              <pre className="mt-2 whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg">
                <code>
                  Use the attached image as the base style and composition.
                  Transform the three fully-uniformed soldiers into a smooth,
                  controlled dance animation while maintaining their stance,
                  camera angle, and environment. All three remain in full gear,
                  facing the camera, full-body, positioned exactly as in the
                  reference image. Animate them performing a clean, rhythmic
                  Crip-walk–inspired footwork routine—smooth heel-toe motions,
                  glide steps, side-to-side toe pivots, and synchronized foot
                  pops. Movements should be sharp but fluid, grounded, and
                  confident. No gang symbols or gestures; dance should focus
                  solely on footwork technique and rhythm. Camera remains
                  steady, 35mm–50mm focal-length style, shallow depth of field,
                  background blurred as in the reference. Lighting stays
                  overcast and neutral. Loopable 4–6 second clip with seamless
                  start and end.
                </code>
              </pre>

              {/* 2. Three Soldiers – Soul Train */}
              <h3 className="text-xl font-bold mt-6 mb-2">
                2. Three Soldiers – Funky 70s Soul Train
              </h3>
              <p className="text-sm text-muted-foreground">
                Same reference image as Prompt 1.
              </p>
              <pre className="mt-2 whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg">
                <code>
                  Use the attached image as the visual base. Keep the three
                  uniformed soldiers standing in the same positions, full-body,
                  facing the camera, same framing and overcast outdoor setting.
                  Animate them breaking into a funky 1970s Soul Train–inspired
                  dance routine. Movements should be joyful, rhythmic, and
                  smooth: body rolls, side-step glides, shoulder pops, hip
                  sways, light foot shuffles, and coordinated disco-era groove
                  patterns. No finger points or symbols—keep gestures neutral
                  and dance-focused. Their expressions stay serious or subtly
                  concentrated, creating a playful contrast with the
                  choreography. Camera remains fixed, same focal length and
                  depth of field as the reference image. Background crowd stays
                  blurred with soft motion. Lighting unchanged. Produce a 4–6
                  second seamless loop with continuous funk-inspired movement.
                </code>
              </pre>

              {/* 3. Single Soldier – Crip Walk */}
              <h3 className="text-xl font-bold mt-6 mb-2">
                3. Single Soldier – Crip-Walk Footwork
              </h3>
              <p className="text-sm text-muted-foreground">
                Reference: one soldier standing centered in a city street during
                a protest.
              </p>
              <pre className="mt-2 whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg">
                <code>
                  Use the attached image as the base style and composition.
                  Transform the single fully-uniformed soldier into a smooth,
                  controlled dance animation while maintaining her stance, camera
                  angle, full-body framing, and the surrounding protest-march
                  environment. She remains in full gear, facing the camera, feet
                  planted in the same position as in the reference. Animate her
                  performing a clean, rhythmic Crip-walk–inspired footwork
                  routine—smooth heel-toe motions, subtle glide steps,
                  side-to-side toe pivots, and confident, grounded foot pops.
                  Movement should be sharp yet fluid, focused entirely on
                  footwork with minimal upper-body motion. No gang symbols or
                  hand gestures; the actions should emphasize pure dance
                  technique and rhythm. Keep the camera steady, matching the
                  original perspective and focal-length feel (35mm–50mm). Retain
                  the midday lighting, long-street urban setting, and lightly
                  blurred crowd in the background. Produce a loopable 4–6 second
                  clip with a seamless start and end.
                </code>
              </pre>

              {/* 4. Single Soldier – Soul Train */}
              <h3 className="text-xl font-bold mt-6 mb-2">
                4. Single Soldier – Soul Train Funk
              </h3>
              <p className="text-sm text-muted-foreground">
                Same single-soldier reference as Prompt 3.
              </p>
              <pre className="mt-2 whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg">
                <code>
                  Use the attached image as the base style, framing, and overall
                  composition. Keep the single uniformed soldier standing in the
                  exact same position—full body, centered, facing the camera—
                  with the same gear, lighting, shadows, and protest-march
                  background. Animate her performing a smooth, rhythmic 1970s
                  Soul Train–inspired funky dance routine. Movements should
                  include relaxed shoulder grooves, soft hip sways, subtle body
                  rolls, light foot shuffles, toe taps, and disco-era side-step
                  patterns. Dance should feel joyful, fluid, and in-the-pocket
                  while still grounded and realistic. No symbolic or non-dance
                  gestures—motion should stay purely dance-based. Maintain the
                  original camera angle, fixed perspective, and slight
                  depth-of-field blur on the crowd. Keep the midday sun lighting
                  consistent with the photo. Preserve all clothing and
                  environment details exactly as in the reference image. Produce
                  a 4–6 second seamless loop where the dance moves flow
                  continuously without a visible start or end.
                </code>
              </pre>

              {/* 5. Soldier + Frog – Crip Walk */}
              <h3 className="text-xl font-bold mt-6 mb-2">
                5. Soldier + Frog Mascot – Crip-Walk Footwork
              </h3>
              <p className="text-sm text-muted-foreground">
                Reference: frog mascot and soldier dancing together at night.
              </p>
              <pre className="mt-2 whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg">
                <code>
                  Use the attached image as the base style and composition.
                  Maintain the full-body framing, nighttime urban setting, crowd
                  presence, and the characters’ exact positions: one
                  fully-uniformed soldier on the right and the large green frog
                  mascot on the left. Transform both of them into a smooth,
                  controlled dance animation while keeping their stance, camera
                  angle, lighting, and environment consistent with the original
                  photo. Animate the soldier and the frog mascot performing a
                  clean, rhythmic Crip-walk–inspired footwork routine—smooth
                  heel-toe motions, subtle glide steps, side-to-side toe pivots,
                  and confident foot pops. Movements should be sharp yet fluid,
                  grounded, and realistic. The frog mascot’s motions should
                  follow the same rhythm but with slightly exaggerated
                  costume-appropriate bounce and softness. No gang symbols or
                  hand gestures; focus purely on footwork and dance rhythm.
                  Keep the camera steady with the same 35mm–50mm focal-length
                  feel, shallow depth of field, and nighttime street lighting.
                  Preserve the background police officers, bystanders, and
                  environment with slight natural blur. Output a seamless 4–6
                  second loop where both characters continue the dance without a
                  visible start or end.
                </code>
              </pre>

              {/* 6. Soldier + Frog – Soul Train */}
              <h3 className="text-xl font-bold mt-6 mb-2">
                6. Soldier + Frog Mascot – Soul Train Funk
              </h3>
              <p className="text-sm text-muted-foreground">
                Same reference as Prompt 5.
              </p>
              <pre className="mt-2 whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg">
                <code>
                  Use the attached image as the base style and composition.
                  Maintain the exact framing, nighttime urban environment,
                  full-body view, and original positions of both characters: the
                  fully-uniformed soldier on the right and the large green frog
                  mascot on the left. Preserve their gear, costumes, lighting,
                  and the surrounding police officers and bystanders in the
                  background. Animate the soldier and the frog mascot performing
                  a funky, joyful 1970s Soul Train–inspired dance routine.
                  Movements should include smooth body grooves, relaxed shoulder
                  rolls, disco-era side-steps, hip sways, rhythmic foot
                  shuffles, and fun, in-the-pocket funk timing. The frog mascot
                  may have slightly exaggerated, bouncy motions appropriate for
                  the costume, while the soldier maintains grounded, confident,
                  controlled funk steps. No symbolic gestures—focus purely on
                  dance movement and groove. Keep the camera locked in the same
                  position with a 35mm–50mm focal-length feel. Retain the
                  nighttime street lighting, soft depth-of-field blur on the
                  crowd, and overall realistic visual tone. Produce a 4–6 second
                  seamless loop where both characters continue dancing with
                  smooth Soul Train style and no visible beginning or end.
                </code>
              </pre>

              {/* 7. Frog Only – Crip Walk */}
              <h3 className="text-xl font-bold mt-6 mb-2">
                7. Frog Mascot – Crip-Walk Footwork
              </h3>
              <p className="text-sm text-muted-foreground">
                Reference: full-body frog mascot at night, centered.
              </p>
              <pre className="mt-2 whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg">
                <code>
                  Use the attached image as the base style and composition.
                  Maintain the full-body framing, nighttime urban setting, and
                  the frog mascot’s exact position in the center of the frame.
                  Transform the frog mascot into a smooth, controlled dance
                  animation while keeping the camera angle, lighting, costume
                  details, and surrounding environment identical to the
                  reference. Animate the frog mascot performing a clean,
                  rhythmic Crip-walk–inspired footwork routine—smooth heel-toe
                  motions, subtle glides, side-to-side toe pivots, and
                  confident foot pops. Movements should be sharp but fluid,
                  grounded, and costume-appropriate with soft, bouncy motion but
                  realistic rhythm. No gang symbols or explicit hand gestures;
                  the focus should remain solely on dance-based footwork and
                  groove. Keep the camera steady with a 35mm–50mm focal-length
                  feel. Preserve the nighttime lighting, the softly blurred
                  crowd and police officers in the background, and the
                  reflective texture of the pavement. Produce a loopable 4–6
                  second clip with a seamless start and end.
                </code>
              </pre>

              {/* 8. Frog Only – Soul Train */}
              <h3 className="text-xl font-bold mt-6 mb-2">
                8. Frog Mascot – Soul Train Funk
              </h3>
              <p className="text-sm text-muted-foreground">
                Same frog-only reference as Prompt 7.
              </p>
              <pre className="mt-2 whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg">
                <code>
                  Use the attached image as the base style and composition.
                  Keep the frog mascot in the same full-body position, centered
                  in the frame, with the nighttime urban environment, lighting,
                  and background crowd preserved exactly as shown. Maintain the
                  costume details, proportions, and camera angle. Animate the
                  frog mascot performing a funky, joyful 1970s Soul
                  Train–inspired dance routine. Movements should include loose,
                  groovy body rolls, relaxed shoulder dips, disco-style
                  side-steps, hip sways, rhythmic foot slides, and upbeat funk
                  timing. The dance should feel playful and full of personality,
                  with the mascot’s soft, rounded costume creating naturally
                  bouncy, exaggerated motions that remain smooth and in rhythm.
                  No symbolic or non-dance gestures—focus entirely on dance
                  groove and expressive funk style. Keep the camera locked in
                  place, with a 35mm–50mm focal-length feel and the same
                  nighttime street lighting. Retain the slight depth-of-field
                  blur on the crowd and surrounding officers. Produce a seamless
                  4–6 second loop where the frog mascot maintains continuous Soul
                  Train–style dance moves with no visible start or end.
                </code>
              </pre>

              {/* 9. Crowned Mascot – Crip Walk */}
              <h3 className="text-xl font-bold mt-6 mb-2">
                9. Crowned Mascot (Doraemon-style) – Crip-Walk Footwork
              </h3>
              <p className="text-sm text-muted-foreground">
                Reference: blue crowned mascot surrounded by balloons with riot
                police behind.
              </p>
              <pre className="mt-2 whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg">
                <code>
                  Use the attached image as the base style and composition.
                  Maintain the exact framing, nighttime urban lighting, dense
                  line of riot-police officers in the background, and the
                  central full-body position of the cartoon mascot wearing a
                  golden crown. Preserve the character’s proportions, colors,
                  costume details, and the cluster of balloons surrounding it.
                  Transform the mascot into a smooth, controlled dance animation
                  while keeping the camera angle, environment, and lighting
                  identical to the reference image. Animate the mascot
                  performing a clean, rhythmic Crip-walk–inspired footwork
                  routine—smooth heel-toe motions, gentle glide steps,
                  side-to-side toe pivots, and confident foot pops. Movements
                  should be sharp but fluid, grounded, and adapted to the
                  character’s rounded, costume-like form, giving the dance a
                  soft, bouncy quality while remaining realistic and
                  rhythmically precise. No gang symbols or expressive hand
                  gestures; the focus is solely on dance footwork and groove.
                  Keep the camera steady with a 35mm–50mm focal-length feel,
                  preserving the slight depth-of-field separation between the
                  foreground mascot and the background officers. Retain the warm
                  streetlights, smoke or haze effects, and nighttime mood.
                  Produce a seamless 4–6 second loop where the dance continues
                  without a visible beginning or end.
                </code>
              </pre>

              {/* 10. Crowned Mascot – Soul Train */}
              <h3 className="text-xl font-bold mt-6 mb-2">
                10. Crowned Mascot (Doraemon-style) – Soul Train Funk
              </h3>
              <p className="text-sm text-muted-foreground">
                Same crowned-mascot reference as Prompt 9.
              </p>
              <pre className="mt-2 whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg">
                <code>
                  Use the attached image as the base style and composition.
                  Preserve the full-body framing of the large blue cartoon
                  mascot wearing a golden crown, along with the nighttime urban
                  setting, the line of riot-police officers standing behind it,
                  the dramatic street lighting, and the colorful balloons
                  clustered around the character. Maintain the original camera
                  angle, perspective, shadows, and environmental details.
                  Animate the mascot performing a funky, joyful 1970s Soul
                  Train–inspired dance routine. Movements should include smooth
                  body rolls, disco-style side-steps, playful hip sways,
                  rhythmic foot slides, loose shoulder dips, and classic Soul
                  Train groove timing. The dance should feel expressive, upbeat,
                  and full of personality, with the mascot’s rounded form giving
                  the motions a naturally soft, bouncy quality while keeping
                  them in rhythm. No symbolic or non-dance gestures—focus on
                  pure funk-era dance style and musicality. Keep the camera
                  locked in place with a 35mm–50mm focal-length feel. Retain the
                  warm streetlight glow, nighttime haze, and slight
                  depth-of-field blur separating the mascot from the background
                  officers. Produce a 4–6 second seamless loop where the mascot
                  continues the Soul Train groove without any visible beginning
                  or end.
                </code>
              </pre>
            </div>
          </section>

          {/* Placeholder for your per-model video grids */}
          <section>
            <h2 className="text-3xl font-bold mb-6">
              Per-Model Dance Grids (Coming Soon)
            </h2>
            <p className="text-muted-foreground mb-4">
              For each prompt above, you can embed a grid of videos showing the
              outputs from Veo 3, Veo 3 Fast, Seedance, Runway, LTX, Kling,
              Wan Vace, Runway Act-Two, Minimax Hailuo 02, and Higgsfield. This
              will let viewers visually compare how each model handles timing,
              motion smoothness, and character preservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton href="/primary-action">
                See Latest Dance Off
              </PrimaryButton>
              <SecondaryButton href="/contact">
                Suggest a New Prompt
              </SecondaryButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
