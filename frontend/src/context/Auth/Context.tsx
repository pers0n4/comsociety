import React from 'react';

type AuthState = string;
type AuthDispatch = React.Dispatch<React.SetStateAction<string>>;

const AuthContext = React.createContext<AuthState | undefined>(undefined);
const DispatchContext = React.createContext<AuthDispatch>(() => {
  throw new Error('AuthDispatch');
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = React.useState('');

  return (
    <AuthContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthState => {
  const state = React.useContext(AuthContext);
  if (!state) {
    throw new Error('AuthProvider');
  }
  return state;
};

export const useAuthDispatch = (): AuthDispatch =>
  React.useContext(DispatchContext);
