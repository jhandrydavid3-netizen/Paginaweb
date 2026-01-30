import { useEffect, useState } from 'react';
import TableMui from '../../../components/TableMui';

import TitlePageMui from '../../../components/TitlePageMui';
import { columnasHotels } from '../../../utils/columnasTable';
import { GetHotels } from '../../../utils/hotel';


function Hotels() {
    const [listHotels, setListHotels] = useState([]);
    const [statModal, setStatModal] = useState({
        open: false,
        title: "",
        message: null,
        status: "info"
    });

    const hadlerGetHotels = () => {
        const hotels = GetHotels()
        setListHotels(hotels)
    }
    const handleEditHotel = (id) => {

        alert("Editar Hotel" + id);
    }
    const handleDeleteHotel = (id) => {

        setStatModal({
            open: true,
            status: "warning",
            message: "¿Estas seguro de eliminar el hotel con ID " + id + "?",
        })
    }
    const handleViewHotel = (id) => {

        alert("Ver Hotel" + id);
    }

    const handleCloseModal = () => {
        setStatModal({
            open: false,

        })
    }
    useEffect(() => {
        hadlerGetHotels()
    }, [])
    return (
        <>

            <TitlePageMui title="Gestion de Hoteles" />
            <TableMui columns={
                columnasHotels({
                    onDelete: handleDeleteHotel,
                    onEdit: handleEditHotel,
                    onView: handleViewHotel
                })
            } rows={listHotels} />
        </>
    )
}

export default Hotels