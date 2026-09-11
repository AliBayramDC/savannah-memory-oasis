# The Savannah Memory Oasis

Serve this folder over HTTP and open index.html. The oasis program is index.html, with supplied media under assets/. Serve over HTTP so the GLBs load. Three.js uses pinned CDN modules; music is local.

## Landscape and characters

The island has a muted yellow-green savannah surface and the earlier 230 softly swaying grass blades. The imported grass cards and mixed vegetation patches are no longer used. The pond, flower beds and lion platform remain clear.

Four supplied willow trees surround the clearing. The new Nimbus stands beside the existing Nimbus. Trunks, rather than the lowest hanging leaves, determine ground contact for the two older willows. Nimbus presentation ground planes are omitted from placed copies. The opaque-backed leaf atlas correction for willow_tree is retained.

Ali plays GltfAnimation 0; Cara plays Lioness|Lioness_Idle. They remain close together on their platform. The 0.90-unit caracal is restored to its still original pose beside the pond, without an active mixer or walking route. Original source geometry, textures and animation clips are retained; the GLB bytes are untouched.

Small nameplates in front of the lions read AliInsaneZ and caracal_cat7. Flat black lion and brown lioness face icons are drawn directly onto the plate textures beside the text. No miniature 3D cats remain on the plates. The butterfly-and-flower model that obstructed the plates now sits beside the pond's right edge.

Navigation is free to move its orbit target: scroll toward the pointer, right-drag or Shift-drag to pan, and left-drag to orbit. Touch screens support two-finger panning and pinch zoom. Arrow keys pan when the canvas is focused. Clicking a visible object or ground surface chooses a new focus point. Zoom ranges from 0.6 to 60 units around the current target. The home button restores the island overview.

Click or tap the statue for its close three-quarter view; S does the same when the canvas has focus. Dragging or scrolling interrupts this navigation glide. Selecting a view never disables subsequent panning or pointer-directed zoom. Drag and multi-touch gestures do not accidentally select objects. Memory transitions remain guarded, and closing a memory restores the view the visitor was using before opening it.

Six beds use the supplied flowers. The standalone flower GLBs have no embedded clips and receive gentle sway. The butterfly-and-flower placements use Take 01. Both monarch models use their embedded wing animations. Three eastern blue birds play their Animation clip. Seventeen photogrammetry rocks vary in size and orientation.

The fish pond plays Take 001. Its basin sits inside a real opening in the island, with the rim just above ground and the fish visible below water.

## Day and night

The sun/moon button switches either way with a smooth transition. The last memory still introduces the night finale. The street lamp beside the rear statue stays dim by day. At night, a point light and stronger spotlight originate at its actual placed bulb, with a soft halo, subtle beam and warm pool of light. The statue's original texture is retained on a material that responds to this light. World transforms are refreshed before locating the bulb.

Twelve supplied fireflies play Firefly_Armature|Firefly_Landed_Fly_01. They appear only at night and follow small paths around, above and below the four tree canopies. Reduced-motion preferences freeze ambient movement.

## Music and memories

One icon button toggles music with 1.4-second fades and a maximum volume of 20%. There is no track title, player panel, timeline, native audio control or second music button in the letter. Automatic playback is attempted three seconds after scene assets settle and the page finishes loading. If browser autoplay policy blocks it, playback is retried on the next user gesture. A manual music choice cancels the delayed automatic start.

The newly supplied recording is used with the existing fades and quiet controls. Memory progression, final letter and Download Our Year remain available. Ali's Note appears beside the memory buttons on the left instead of over the island. Reloading begins a fresh visit.

## Clean view

The clean-view button beside day/night, music and home shows a brief return hint, then hides all page controls and wording, the username plates and the memory markers. Camera navigation, scenery animation, the current theme and music continue. Escape or a double-click/double-tap on the scene restores the interface and the existing unlock state. Single taps and navigation gestures do not open memories in clean view. Entering clean view is guarded while a memory or letter is open. Reloading starts with the interface visible.

## Checks and delivery

node scripts/check-oasis.mjs checks syntax, memory progression and view restoration, day/night controls, delayed audio, fades, volume, rapid toggles and autoplay fallback. node scripts/check-scenery.mjs loads the actual supplied GLBs and checks their unchanged bytes, selected clips, finite animated bounds, character placement, tree ground contact, firefly bounds, lamp day/night state and pond opening. node scripts/check-navigation.mjs exercises the pinned OrbitControls implementation for pointer zoom, mouse pan, touch navigation, glide interruption and click/drag separation. Cached Three.js modules under .sites-runtime support these Node checks; textures and DOM surfaces are mocked in Node.

npm run build produces dist/. The standalone folder and ZIP contain the oasis and supplied media. Serve the standalone index.html over HTTP; internet access is still required for the pinned Three.js modules.

