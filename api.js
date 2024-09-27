// Exemple de modèle
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', UserSchema);

// Route d'authentification
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password }); // À adapter pour la sécurité
    if (user) {
        res.status(200).json({ message: 'Connexion réussie' });
    } else {
        res.status(401).json({ message: 'Utilisateur ou mot de passe incorrect' });
    }
});