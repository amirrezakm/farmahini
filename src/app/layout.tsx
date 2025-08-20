export const metadata = {
  title: 'Kardiologische Schwerpunktpraxis Speyer - Dr. Faraz Farmahini',
  description: 'Modernste kardiologische Diagnostik und Behandlung in Speyer. Terminvereinbarung online möglich.',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}