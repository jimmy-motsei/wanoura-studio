export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-neutral-950 border-t border-neutral-900/50 px-6 md:px-12 lg:px-24 py-16 text-neutral-400 text-sm">
            <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-4">
                <div>
                    <h4 className="text-neutral-200 text-xs uppercase tracking-wide mb-4">
                        Work
                    </h4>
                    <ul className="space-y-2 text-neutral-500 text-xs leading-relaxed">
                        <li>Sonic Identity</li>
                        <li>Score & Sound Design</li>
                        <li>Voice Direction</li>
                        <li>Mix & Delivery</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-neutral-200 text-xs uppercase tracking-wide mb-4">
                        Studio
                    </h4>
                    <ul className="space-y-2 text-neutral-500 text-xs leading-relaxed">
                        <li>About Wanoura</li>
                        <li>Approach & Process</li>
                        <li>Culture & Values</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-neutral-200 text-xs uppercase tracking-wide mb-4">
                        Connect
                    </h4>
                    <ul className="space-y-2 text-neutral-500 text-xs leading-relaxed">
                        <li>Instagram</li>
                        <li>Vimeo / Reel</li>
                        <li>Email / Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-neutral-200 text-xs uppercase tracking-wide mb-4">
                        Studios
                    </h4>
                    <ul className="space-y-2 text-neutral-500 text-xs leading-relaxed">
                        <li>Johannesburg</li>
                        <li>Remote / Global</li>
                        <li>Commercial / Campaign / Product</li>
                        <li>Culture, Community & Emerging Talent</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-neutral-900/50 pt-8">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span className="px-2 py-1 rounded-md bg-neutral-800/50 text-neutral-300 border border-neutral-700/50">
            Wanoura / Sound Studio
          </span>
                </div>

                <div className="text-[11px] text-neutral-600">
                    © {year} Wanoura Sound Studio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
