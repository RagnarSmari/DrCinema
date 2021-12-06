import cinemaService from '../../services/cinemaService';
import * as constants from '../constants';

const bioparadis = require('../../resources/logo_bioparadis.png');
const haskolabio = require('../../resources/logo_haskolabio.png');
const laugarasbio = require('../../resources/logo_laugarasbio.png');
const sambioalfabakka = require('../../resources/logo_sambioalfabakka.png');
const sambioegilsholl = require('../../resources/logo_sambioegilsholl.png');
const sambiokringlunni = require('../../resources/logo_sambiokringlunni.png');
const smaraio = require('../../resources/logo_smarabio.png');
const borgarbio = require('../../resources/logo_borgarbio.png');
const akureyri = require('../../resources/logo_sambioakureyri.png');
const selfoss = require('../../resources/logo_selfoss.png');
const keflavik = require('../../resources/logo_keflavik.png');

const getAllCinemasSuccess = (allCinemas) => ({
  type: constants.GET_ALL_CINEMAS,
  payload: allCinemas,
});

const getAllCinemas = () => async (dispatch) => {
  try {
    const allCinemas = await cinemaService.getAllCinemas();
    // eslint-disable-next-line no-use-before-define
    linkLogosToCinemas(allCinemas);
    dispatch(getAllCinemasSuccess(allCinemas));
  } catch (err) {
    // TODO: Should dispatch an error action
  }
};

const linkLogosToCinemas = (allCinemas) => allCinemas.map((c) => {
  if (c.name === 'Smárabíó') {
    c.logo = smaraio;
  }
  if (c.name === 'Háskólabíó') {
    c.logo = haskolabio;
  }
  if (c.name === 'Borgarbíó') {
    c.logo = borgarbio;
  }
  if (c.name === 'Laugarásbíó') {
    c.logo = laugarasbio;
  }
  if (c.name === 'Bíó Paradís') {
    c.logo = bioparadis;
  }
  if (c.name === 'Álfabakki') {
    c.logo = sambioalfabakka;
  }
  if (c.name === 'Kringlubíó') {
    c.logo = sambiokringlunni;
  }
  if (c.name === 'Sambíóin Egilshöll') {
    c.logo = sambioegilsholl;
  }
  if (c.name === 'Sambíóin, Akureyri') {
    c.logo = akureyri;
  }
  if (c.name === 'Sambíóin, Selfossi') {
    c.logo = selfoss;
  }
  if (c.name === 'Sambíóin, Keflavík') {
    c.logo = keflavik;
  }
});

export default getAllCinemas;
