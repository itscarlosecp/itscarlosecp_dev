import * as React from "react"
import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Projects from "@/components/Projects"

const index = () => {
	return (
		<React.Fragment>
			<Navbar />
			<main className="max-w-4xl mx-auto antialiased">
				<div className="my-10 space-y-14 md:space-y-24">
					<About />
					<Projects />
				</div>
			</main>
		</React.Fragment>
	)
}

export default index
