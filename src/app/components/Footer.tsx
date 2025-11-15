export default function Footer() {
    return (
        <footer style={{
            marginTop: '2rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: '#888'
        }}>
            &copy; {new Date().getFullYear()} Built with ❤️ by Kartik.
        </footer>
    )
}