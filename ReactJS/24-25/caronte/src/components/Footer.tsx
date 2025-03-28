export default function Footer() {
    return (
      <footer className="bg-blue-600 text-white mt-10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Mi Sitio. Todos los derechos reservados.</p>
  
          <div className="flex gap-4">
            {/* GitHub */}
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg className="w-6 h-6 fill-white hover:fill-gray-300 transition" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.4 0 12.07c0 5.34 3.44 9.86 8.21 11.45.6.12.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.63-4.04-1.63-.54-1.39-1.33-1.76-1.33-1.76-1.09-.76.08-.74.08-.74 1.2.08 1.83 1.25 1.83 1.25 1.07 1.87 2.8 1.33 3.49 1.02.11-.79.42-1.33.76-1.63-2.66-.31-5.47-1.35-5.47-6.01 0-1.33.47-2.41 1.24-3.26-.12-.31-.54-1.56.12-3.26 0 0 1.01-.32 3.3 1.24a11.36 11.36 0 0 1 3-.41c1.02 0 2.04.14 3 .41 2.28-1.56 3.29-1.24 3.29-1.24.67 1.7.25 2.95.12 3.26.77.85 1.24 1.93 1.24 3.26 0 4.68-2.81 5.69-5.48 6 .44.38.83 1.12.83 2.26 0 1.63-.02 2.95-.02 3.35 0 .32.22.7.83.58C20.56 21.93 24 17.41 24 12.07 24 5.4 18.63 0 12 0Z" />
              </svg>
            </a>
  
            {/* Twitter */}
            <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg className="w-6 h-6 fill-white hover:fill-gray-300 transition" viewBox="0 0 24 24">
                <path d="M24 4.56c-.89.39-1.84.66-2.84.78a4.93 4.93 0 0 0 2.16-2.72 9.85 9.85 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.4 4.49 13.97 13.97 0 0 1-10.15-5.15 4.91 4.91 0 0 0 1.52 6.56A4.9 4.9 0 0 1 .96 9v.06a4.92 4.92 0 0 0 3.95 4.83 4.93 4.93 0 0 1-2.21.08 4.92 4.92 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54 13.94 13.94 0 0 0 7.55 21c9.05 0 14-7.5 14-14v-.64a10.1 10.1 0 0 0 2.45-2.57Z" />
              </svg>
            </a>
  
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-6 h-6 fill-white hover:fill-gray-300 transition" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.55v-5.4c0-1.28-.02-2.94-1.8-2.94-1.8 0-2.08 1.4-2.08 2.84v5.5H9.47v-11h3.4v1.5h.05c.47-.88 1.62-1.8 3.33-1.8 3.56 0 4.22 2.35 4.22 5.4v6.4ZM5.34 7.45a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM6.94 20.45H3.74v-11h3.2v11Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    )
  }