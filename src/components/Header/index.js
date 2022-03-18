import { MainHeader, TitleSection } from "./header.styled";

export default function Header() {
    return (
            <MainHeader>
                <TitleSection>
                    <img src="/pikachu.svg" width="200" height="50"
                        style={{position: 'absolute', transform:' translateX(-2.5rem);'}}/>
                    <img src="/pokedex.png" width="200"
                            height="50" alt="fonte-de-pokemon" border="0"/>
                </TitleSection>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 100">
                    <path fill="#ff0000" fillOpacity={1}
                        d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,122.7C840,107,960,117,1080,122.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                    </path>
                </svg>
            </MainHeader>
        )
}