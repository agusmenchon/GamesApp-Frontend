import { useDispatch, useSelector } from "react-redux"
import { onOpenDateModal,onCloseDateModal } from "../store";

export const useLayoutStore = () => {
    const dispatch = useDispatch();
    const { isDateModalOpen } = useSelector(state => state.layout);

    const openDateModal = () => {
        dispatch(onOpenDateModal());
    }

    const closeDateModal = () => {
        dispatch(onCloseDateModal());
    }

    const toggleDateModal = () => {
        (isDateModalOpen) ? openDateModal() : closeDateModal();
    }

    return{
        //props
        isDateModalOpen,


        //metodos
        openDateModal,
        closeDateModal,
        toggleDateModal
    }
}