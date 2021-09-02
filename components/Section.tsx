interface Props {
  id: string
  children: React.ReactNode
}

const Section = (props: Props) => (
  <section id={props.id} className="container px-4 mx-auto">
    {props.children}
  </section>
)

export default Section
