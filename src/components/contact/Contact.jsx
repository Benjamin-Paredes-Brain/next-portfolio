import { lazy, Suspense } from 'react';
import { ContactForm } from "./ContactForm";

const LazyUFOCanvas = lazy(() => import("@/components/models/UFO"));

const Contact = () => {
    return (
        <section id='contact' className='section-separation'>
            <h2 className='text-stroke title'>CONTACT</h2>
            <div className="flex flex-col items-center lg:grid lg:gap-8" style={{ gridTemplateColumns: "1fr 1fr" }}>
                <ContactForm />
                <Suspense fallback={null}>
                    <span className="flex items-center justify-center relative w-full h-64 mt-12 lg:h-full z-0">
                        <LazyUFOCanvas />
                    </span>
                </Suspense>
            </div>
        </section>
    )
}

export default Contact;