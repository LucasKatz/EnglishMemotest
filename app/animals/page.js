import Animals from "./animalsBody";

export async function generateMetadata({params, searchParams}, parent) {

    return {
        title: `Memotest - Animals`,
    }
}

export default function Contact() {


    return (
        <>
            <Animals/>
        </>
    );
}