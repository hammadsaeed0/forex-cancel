import React from 'react';

const App = () => {
  const redirectToHome = () => {
    window.location.href = 'https://user.forexbeginnersacademy.net/dashboard';
};
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#03CBE1', height:'100vh', width:'100vw'}}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Payment Not Successful</h2>
                <p style={styles.message}>We're sorry, but your payment was not successful.</p>
                <button style={styles.button} onClick={redirectToHome}>Back To Home</button>
            </div>
        </div>
    );
}

const styles = {

    container: {
        maxWidth: '400px',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#ff6666',
        marginBottom: '10px',
    },
    message: {
        fontSize: '18px',
        color: '#666',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#03CBE1',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default App;
