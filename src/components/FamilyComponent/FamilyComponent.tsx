import {simpsons} from "../../data/data.ts";
import {CharacterComponent} from "../CharacterComponent/CharacterComponent.tsx";
import type {ICharacter} from "../../models/ICharacter.ts";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value:ICharacter,index:number) => <CharacterComponent item={value} key={index}>
                    {value.info}
                </CharacterComponent>)
            }
        </div>
    );
};
