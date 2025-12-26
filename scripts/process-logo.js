import sharp from "sharp"

// This script removes white backgrounds from the logo to ensure a clean favicon
async function processLogo() {
  const imageUrl = "/images/image.png"

  try {
    const response = await fetch(imageUrl)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Remove white background (making pixels close to white transparent)
    await sharp(buffer)
      .ensureAlpha()
      .trim() // Remove extra whitespace
      .raw()
      .toBuffer({ resolveWithObject: true })
      .then(({ data, info }) => {
        for (let i = 0; i < data.length; i += 4) {
          // If the pixel is white (R, G, B > 240), make it transparent
          if (data[i] > 240 && data[i + 1] > 240 && data[i + 2] > 240) {
            data[i + 3] = 0
          }
        }
        return sharp(data, {
          raw: {
            width: info.width,
            height: info.height,
            channels: 4,
          },
        })
          .png()
          .toFile("public/icon-transparent.png")
      })

    console.log("[v0] Logo processed successfully with transparency.")
  } catch (error) {
    console.error("[v0] Error processing logo:", error.message)
  }
}

processLogo()
