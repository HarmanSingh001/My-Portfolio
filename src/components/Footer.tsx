export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Harmanpreet Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
