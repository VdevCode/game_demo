import nameImage from './src/text/name.png';
import bg from './src/background/bg.png';
import charactor1 from './src/charactor/charactor_1.png';
import charactor1_choiced from './src/charactor/charactor_1.png';
import charactor2 from './src/charactor/charactor_2.png';
import charactor2_choiced from './src/charactor/charactor_2.png';
import charactor3 from './src/charactor/charactor_3.png';
import charactor3_choiced from './src/charactor/charactor_3.png';
import charactor_box from './src/charactor/box_charactor.png';
import enemy1 from './src/enemy/barries1.png';
import enemy2 from './src/enemy/barries2.png';
import enemy3 from './src/enemy/barries3.png';
import enemy4 from './src/enemy/barries4.png';
import enemy1_down from './src/enemy/barries1_down.png';
import enemy2_down from './src/enemy/barries1_down.png';
import enemy3_down from './src/enemy/barries3_down.png';
import enemy4_down from './src/enemy/barries4_down.png';
import enemy_explosion from './src/enemy/explosion.png';
import itemActive from './src/item/item_active.png';
import it1 from './src/item/it/it1.png';
import it2 from './src/item/it/it2.png';
import it3 from './src/item/it/it3.png';
import it4 from './src/item/it/it4.png';
import it5 from './src/item/it/it5.png';
import help1 from './src/help/help1.png';
import help2 from './src/help/help2.png';
import help3 from './src/help/help3.png';
import boxIcon from './src/play/boxIcon.png';
import hpIcon from './src/play/hpIcon.png';
import processIcon from './src/play/processIcon.png';
import coinIcon from './src/play/coins.png';
import loadingBox from './src/loading/loading_box.png';
import loadingMark from './src/loading/loading_mark.png';
import loadingProcess from './src/loading/loading_process.png';
import test_normal from './src/bee/test_normal.png';
import bee1 from './src/bee/bee1.png';
import bee2 from './src/bee/bee2.png';
import bee3 from './src/bee/bee3.png';
import bee4 from './src/bee/bee4.png';
import bee5 from './src/bee/bee5.png';
import bee6 from './src/bee/bee6.png';
import bee7 from './src/bee/bee7.png';
import logger_win from './src/text/win_log.png';
import logger_lose from './src/text/text.png';
import logger_over from './src/text/gameover.png';
import btn_ingame from './src/button/btn_ingame.png';
import btn_play from './src/button/btn_play.png';
import btn_next from './src/button/btn_next.png';
import btn_playback from './src/button/btn_playback.png';
import test_win from './src/bee/text_win.png';
import test_up from './src/bee/test_up.png';
import test_down from './src/bee/test_down.png';
import test_die from './src/bee/test_die.png';
import JOBIT from './src/major/jobIT.png';
import JOBGAME from './src/major/jobGame.png';
import JOBGRA from './src/major/jobGra.png';
import JOBELEC from './src/major/jobElec.png';
import JOBTRAVEL from './src/major/jobTravel.png';

const NAME = new Image();
NAME.src = nameImage;

// TEST
const TEST_NORMAL = new Image();
TEST_NORMAL.src = test_normal;
const TEST_WIN = new Image();
TEST_WIN.src = test_win;
const TEST_UP = new Image();
TEST_UP.src = test_up;
const TEST_DOWN = new Image();
TEST_DOWN.src = test_down;
const TEST_DIE = new Image();
TEST_DIE.src = test_die;

// BACKGROUND
const BG = bg;
const BG_IMG = new Image();
BG_IMG.src = bg;

// BEE
const BEE_1 = bee1;
const BEE_2 = bee2;
const BEE_3 = bee3;
const BEE_4 = bee4;
const BEE_5 = bee5;
const BEE_6 = bee6;
const BEE_7 = bee7;

// ENEMY
const ENEMY_1 = new Image();
ENEMY_1.src = enemy1;
const ENEMY_1_DOWN = new Image();
ENEMY_1_DOWN.src = enemy1_down;
const ENEMY_2 = new Image();
ENEMY_2.src = enemy2;
const ENEMY_2_DOWN = new Image();
ENEMY_2_DOWN.src = enemy2_down;
const ENEMY_3 = new Image();
ENEMY_3.src = enemy3;
const ENEMY_3_DOWN = new Image();
ENEMY_3_DOWN.src = enemy3_down;
const ENEMY_4 = new Image();
ENEMY_4.src = enemy4;
const ENEMY_4_DOWN = new Image();
ENEMY_4_DOWN.src = enemy4_down;
const ENEMY_EXPLOSION = new Image();
ENEMY_EXPLOSION.src = enemy_explosion;

// HELP
const HELP_1 = new Image();
HELP_1.src = help1;
const HELP_2 = new Image();
HELP_2.src = help2;
const HELP_3 = new Image();
HELP_3.src = help3;

// ITEM
const ITEM_ACTIVE = new Image();
ITEM_ACTIVE.src = itemActive;
const IT_1 = new Image();
IT_1.src = it1;
const IT_2 = new Image();
IT_2.src = it2;
const IT_3 = new Image();
IT_3.src = it3;
const IT_4 = new Image();
IT_4.src = it4;
const IT_5 = new Image();
IT_5.src = it5;

// PLAY
const HP_ICON = new Image();
HP_ICON.src = hpIcon;
const PROCESS_ICON = new Image();
PROCESS_ICON.src = processIcon;
const COIN_ICON = new Image();
COIN_ICON.src = coinIcon;
const BOX_ICON = new Image();
BOX_ICON.src = boxIcon;

// Logger
const LOGGER_WIN = logger_win;
const LOGGER_LOSE = logger_lose;
const LOGGER_OVER = logger_over;

// Job

const images = {
  TEST_NORMAL,
  TEST_WIN,
  TEST_UP,
  TEST_DOWN,
  TEST_DIE,
  nameImage,
  NAME,
  BG,
  BG_IMG,
  charactor1,
  charactor1_choiced,
  charactor2,
  charactor2_choiced,
  charactor3,
  charactor3_choiced,
  charactor_box,
  BEE_1,
  BEE_2,
  BEE_3,
  BEE_4,
  BEE_5,
  BEE_6,
  BEE_7,
  ENEMY_1,
  ENEMY_1_DOWN,
  ENEMY_2,
  ENEMY_2_DOWN,
  ENEMY_3,
  ENEMY_3_DOWN,
  ENEMY_4,
  ENEMY_4_DOWN,
  ENEMY_EXPLOSION,
  HELP_1,
  help1,
  HELP_2,
  help2,
  HELP_3,
  help3,
  ITEM_ACTIVE,
  IT_1,
  IT_2,
  IT_3,
  IT_4,
  IT_5,
  hpIcon,
  HP_ICON,
  processIcon,
  PROCESS_ICON,
  coinIcon,
  COIN_ICON,
  boxIcon,
  BOX_ICON,
  loadingBox,
  loadingMark,
  loadingProcess,
  LOGGER_WIN,
  LOGGER_LOSE,
  LOGGER_OVER,
  btn_ingame,
  btn_play,
  btn_next,
  btn_playback,
  JOBIT,
  JOBGAME,
  JOBGRA,
  JOBELEC,
  JOBTRAVEL,
};

export default images;
