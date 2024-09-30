import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-8 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left mx-auto">
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About Us</Link></li>
                <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-sm text-gray-600 hover:text-gray-900">Documentation</Link></li>
                <li><Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link></li>
                <li><Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link href="/changelog" className="text-sm text-gray-600 hover:text-gray-900">Changelog</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</Link></li>
                <li><a href="mailto:support@viusalens.org" className="text-sm text-gray-600 hover:text-gray-900">Email</a></li>
                <li><a href="https://discord.gg/7QMraJUsQt" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900">Discord</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}