import Cocoa

let imagePath = "/Users/vishnuojha/.gemini/antigravity-ide/brain/ebb06416-2401-4b8e-904c-7ea02a95abd3/hero_page_loaded_1783236354161.png"
guard let image = NSImage(contentsOfFile: imagePath) else {
    print("Could not load image")
    exit(1)
}

var imageRect = CGRect(x: 0, y: 0, width: image.size.width, height: image.size.height)
guard let cgImage = image.cgImage(forProposedRect: &imageRect, context: nil, hints: nil) else {
    print("Could not get CGImage")
    exit(1)
}

let width = cgImage.width
let height = cgImage.height

let colorSpace = CGColorSpaceCreateDeviceRGB()
let bytesPerPixel = 4
let bytesPerRow = bytesPerPixel * width
let bitmapInfo = CGImageAlphaInfo.premultipliedLast.rawValue | CGBitmapInfo.byteOrder32Big.rawValue

guard let context = CGContext(data: nil, width: width, height: height, bitsPerComponent: 8, bytesPerRow: bytesPerRow, space: colorSpace, bitmapInfo: bitmapInfo) else {
    print("Could not create context")
    exit(1)
}

context.draw(cgImage, in: CGRect(x: 0, y: 0, width: width, height: height))
guard let data = context.data else {
    print("Could not get data")
    exit(1)
}

let buffer = data.bindMemory(to: UInt8.self, capacity: width * height * bytesPerPixel)

// Coordinate mapping for top-left red area
let x = Int(Double(width) * 0.4)
let y = Int(Double(height) * 0.8) // Flipped vertically? Let's check a few points

let points = [
    (Int(Double(width) * 0.35), Int(Double(height) * 0.2)),
    (Int(Double(width) * 0.35), Int(Double(height) * 0.5)),
    (Int(Double(width) * 0.65), Int(Double(height) * 0.2)),
]

for (px, py) in points {
    let pixelIndex = (py * width + px) * bytesPerPixel
    let r = buffer[pixelIndex]
    let g = buffer[pixelIndex + 1]
    let b = buffer[pixelIndex + 2]
    print(String(format: "At (%d, %d): #%02X%02X%02X", px, py, r, g, b))
}
