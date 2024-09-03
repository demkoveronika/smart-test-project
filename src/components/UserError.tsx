export const UserError = () => (
  <div style={{
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
  }}>
    <img 
      src="/icons/user-not-found.png" 
      alt="user not found" 
      style={{width: '60px', height: '60px', padding: 0}} 
    />
    <p style={{
      fontWeight: '700', 
      fontSize: '32px', 
      color: 'red', 
      padding: 0, 
      margin: 0,
    }}>
      User not found
    </p>
  </div>
)