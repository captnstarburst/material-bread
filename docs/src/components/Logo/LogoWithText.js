import React from 'react';
import Logo from './Logo';

function LogoWithText(subtitle) {
  return (
    <div style={styles.container}>
      <Logo animated />
      <h1 style={styles.title} className={'Logo__title'}>
        Material Bread
      </h1>
      {subtitle ? (
        <h4 style={styles.subtitle}>
          React Native Material Design Components{' '}
        </h4>
      ) : null}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 387,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 0,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(10, 10, 10, 0.67)',
    fontWeight: 400,
    margin: 0,
    marginTop: 6,
    textAlign: 'center',
  },
};

export default LogoWithText;