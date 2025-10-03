import Hero from '../Hero'

export default function HeroExample() {
  return <Hero onScrollToContent={() => console.log('Scroll to content')} />
}
