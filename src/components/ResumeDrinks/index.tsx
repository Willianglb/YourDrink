import { QUERY_PEDIDOS } from '../../services/queries';
import { useQuery } from '@apollo/client';
import ListaBebidas from '../../assets/ListBebidas';

const ResumeDrinks = () => {
    const { loading, error, data } = useQuery(QUERY_PEDIDOS, {pollInterval: 500});

    if (loading) return <p>Carregando...</p>;
    if (error) return <h1>{error}</h1>;

    if(data) {
        return (
            <div className="trick__container container grid">
                {data.pedidos.map((item: any) => {
                    const list = item.bebidasId;
                    const drinkSearch = ListaBebidas.find(x => x.id === parseInt(list));
                    return (
                        <div className="trick__content" key={item.id + "" + item.name} >
                            <img
                                src={drinkSearch?.photo}
                                alt=""
                                className="trick__img"
                            />
                            <h3 className="trick__title">{item.name}</h3>
                            <h3>{drinkSearch?.name}</h3>
                            <button className="button trick__button" />
                            {item.done ? <p className="drink_done" >Feito!</p> : null}
                        </div>
                    )})}
            </div>
        )
    }
}

export default ResumeDrinks;