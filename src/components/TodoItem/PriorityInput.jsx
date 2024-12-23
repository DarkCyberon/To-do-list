import styled from "styled-components";
import {useUpdateTodoItem} from "../../data/hooks/useData";
import {useState} from "react";

const ItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const Item = styled.p`
    width: 20px;
    text-align: center;
    cursor: pointer;
    border: 2px solid #413F3F;
    border-radius: 6px;
    opacity: ${props => (props.selected ? 1 : 0.5)};
    transition: opacity 0.3s;
`

export const PriorityInput = ({id, checked, priority, setPriorityForNewTask}) => {
    const {mutate} = useUpdateTodoItem();
    const [selectedPriority, setSelectedPriority] = useState(priority || 1);

    const onClickHandler = (num) => {
        setSelectedPriority(num);
        if (setPriorityForNewTask) {
            setPriorityForNewTask(num);
        }
        mutate({id, checked, priority: num});
    };

    return (
        <ItemsContainer>
            {[1, 2, 3].map(num => (
                <Item
                    key={num}
                    selected={selectedPriority === num}
                    onClick={() => onClickHandler(num)}
                >{num}</Item>
            ))}
        </ItemsContainer>
    );
}