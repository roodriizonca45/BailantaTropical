declare module "qrcode" {
  const QRCode: {
    toBuffer: (
      text: string,
      options?: {
        type?: "png" | "svg" | "terminal";
        errorCorrectionLevel?: "L" | "M" | "Q" | "H";
        margin?: number;
        width?: number;
        color?: { dark: string; light: string };
      }
    ) => Promise<Buffer>;
  };

  export default QRCode;
}

