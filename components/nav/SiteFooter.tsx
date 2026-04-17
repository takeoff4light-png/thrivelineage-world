export default function SiteFooter() {
  return (
    <footer style={{ padding: "24px 0" }}>
      <div className="container" style={{ opacity: 0.8, fontSize: 14 }}>
        © {new Date().getFullYear()} ThriveLineage
      </div>
    </footer>
  );
}
