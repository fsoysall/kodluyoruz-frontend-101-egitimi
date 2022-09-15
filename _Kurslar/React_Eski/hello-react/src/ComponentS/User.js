import PropTypes from "prop-types";

function Userr({ Nameo, Surname, IsLoggedIn, MyFriends, address }) {

    console.log({ Nameo, Surname, IsLoggedIn, MyFriends, address });
    if (!IsLoggedIn) { return <><h1>`OHHH ! NOOO ${Nameo} ${Surname && Surname}` </h1></> }

    return (
        <>
            <h1> <b>SELAM:</b> {Nameo} {Surname}<br /></h1>
            <b>Address:</b> {address.title} / <b>Arkadaşlar: </b>
            {MyFriends.map(f => (`${f.Id}: ${f.name}`))}
        </>
    );
}

Userr.propTypes = {
    Nameo: PropTypes.string.isRequired,
    Surname: PropTypes.string,
    IsLoggedIn: PropTypes.bool.isRequired,
    Age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    MyFriends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
};

Userr.defaultProps = { IsLoggedIn: false, Nameo: "Misafir" };

export default Userr;