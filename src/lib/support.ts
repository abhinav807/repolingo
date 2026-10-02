export const SUPPORT_CONFIG = {
  upiId: "9891948586@fam",
  payeeName: "Abhinav Goyal",
  qrImage: "/fampay-qr.png",
  qrAlt: "FamPay UPI QR code for Abhinav Goyal",
  qrWidth: 398,
  qrHeight: 707,
  githubUrl: "https://github.com/abhinav807/repolingo",
} as const;

export function upiPayLink(): string {
  const { upiId, payeeName } = SUPPORT_CONFIG;
  const params = new URLSearchParams({
    pa: upiId,
    pn: payeeName,
    cu: "INR",
    tn: "Repolingo support",
  });
  return `upi://pay?${params.toString()}`;
}
