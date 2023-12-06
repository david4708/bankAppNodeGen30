import app from './app.js';
import { authenticated, syncUp } from './config/database/db.js';
import { envs } from './config/enviroment/enviroment.js';
async function main() {
  try {
    await authenticated();
    await syncUp();
  } catch (error) {
    console.error(error);
  }
}
main();

app.listen(envs.PORT, () => {
  console.log(`server runining on port:${envs.PORT}`);
});
