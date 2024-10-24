import AppLoading from './AppLoading';
import Cart from './Cart';
import CheckOut from './CheckOut';

const App = () => {
    return (
        <div>
            App
            <h1>Thay đổi</h1>
            <button>submit</button>
            <h2>Thay đổi 3</h2>
            <button>button2</button>
            <button>button 3</button>
            <button>5</button>
            <AppLoading />
            <CheckOut />
            <Cart />
        </div>
    );
};

export default App;
