interface FooterLinkProps {
	href: string
	text: string
}

const FooterLink = (props: FooterLinkProps) => (
	<a
		href={props.href}
		target="_blank"
		rel="noopener noreferrer"
		className="font-medium"
	>
		{props.text}
	</a>
)

const Footer = () => (
	<footer className="max-w-4xl mx-auto py-6 border-t-[2px] border-gray-200">
		<div className="px-4 flex justify-between">
			<p>Built with Next.js and TailwindCSS</p>
			<div className="space-x-4">
				<FooterLink href="https://github.com/itscarlosecp" text="Github" />
				<FooterLink href="https://twitter.com/itscarlosecp" text="Twitter" />
			</div>
		</div>
	</footer>
)

export default Footer
