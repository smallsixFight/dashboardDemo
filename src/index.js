import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);
app.model(require('./models/test').default);
app.model(require('./models/dashboard').default);
app.model(require('./models/articles').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
